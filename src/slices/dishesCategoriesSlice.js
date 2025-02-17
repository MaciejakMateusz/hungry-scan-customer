import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiHost} from "../apiData";

export const getVariants = createAsyncThunk(
    'dishesCategories/getVariants',
    async (credentials, {getState, rejectWithValue}) => {
        const state = getState().dishesCategories.view;
        if (!state.menuItem) {
            return;
        }
        const response = await fetch(`${apiHost}/api/cms/variants/item`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: state.menuItem.id
        });

        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData);
        }

        return await response.json();
    }
);

export const getVariantsSlice = createSlice(
    {
        name: 'getVariants',
        initialState: {
            isLoading: false,
            variants: []
        },
        extraReducers: (builder) => {
            builder
                .addCase(getVariants.pending, state => {
                    state.isLoading = true;
                })
                .addCase(getVariants.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.variants = action.payload;
                })
                .addCase(getVariants.rejected, state => {
                    state.isLoading = false;
                })
        }
    });

export const filter = createAsyncThunk(
    'filtering/filter',
    async (credentials, {rejectWithValue}) => {
        const path = credentials.path;
        const value = credentials.value;
        const response = await fetch(`${apiHost}/api/cms/${path}/filter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: value
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            return rejectWithValue(errorData);
        }

        try {
            return await response.json();
        } catch (error) {
            return {};
        }
    }
);

export const filteringSlice = createSlice(
    {
        name: 'filter',
        initialState: {
            isPending: false,
        },
        extraReducers: (builder) => {
            builder
                .addCase(filter.pending, state => {
                    state.isPending = true;
                })
                .addCase(filter.fulfilled, state => {
                    state.isPending = false;
                })
                .addCase(filter.rejected, (state) => {
                    state.isPending = false;
                })
        }
    });

export const getCategories = createAsyncThunk(
    'getCategories/getCategories',
    async (_, {rejectWithValue}) => {
        const response = await fetch(`${apiHost}/api/cms/categories/available`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });

        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData);
        }

        try {
            return await response.json();
        } catch (error) {
            return {};
        }
    }
);

export const getCategoriesSlice = createSlice({
    name: 'getCategories',
    initialState: {
        categories: [],
        isLoading: false
    },
    reducers: {
      setIsLoading: (state, action) => {
          state.isLoading = action.payload;
      }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, state => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.isLoading = false;
            })
            .addCase(getCategories.rejected, state => {
                state.isLoading = false;
            })
    }
});

export const dishesCategoriesSlice = createSlice(
    {
        name: 'view',
        initialState: {
            category: null,
            menuItem: null,
            filterActive: false,
            filterValue: '',
            filteredItems: null,
            filterExpanded: false,
            onboardingActive: true
        },
        reducers: {
            setCategory: (state, action) => {
                state.category = action.payload;
                state.filterExpanded = false;
                state.filteredItems = null;
                state.filterValue = '';
                state.filterActive = false;
            },
            setMenuItem: (state, action) => {
                state.menuItem = action.payload;
            },
            setFilterActive: (state, action) => {
                state.filterActive = action.payload;
            },
            setFilterValue: (state, action) => {
                state.filterValue = action.payload;
                if(state.filterValue === '') {
                    state.filterActive = false;
                }
            },
            setFilteredItems: (state, action) => {
                state.filteredItems = action.payload;
            },
            setFilterExpanded: (state, action) => {
                state.filterExpanded = action.payload;
                state.filteredItems = null;
                state.filterValue = '';
                state.filterActive = false;
            },
            setOnboardingActive: (state, action) => {
                state.onboardingActive = action.payload;
            },
        }
    });

export const {setIsLoading} = getCategoriesSlice.actions;

export const {
    setCategory,
    setMenuItem,
    setFilterActive,
    setFilterValue,
    setFilteredItems,
    setFilterExpanded,
    setOnboardingActive
} = dishesCategoriesSlice.actions;

const dishesCategoriesReducer = combineReducers({
    view: dishesCategoriesSlice.reducer,
    getCategories: getCategoriesSlice.reducer,
    getVariants: getVariantsSlice.reducer,
    filter: filteringSlice.reducer
});

export default dishesCategoriesReducer;