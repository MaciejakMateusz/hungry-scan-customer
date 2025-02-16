import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiHost} from "../apiData";

export const notifyViewEvent = createAsyncThunk(
    'statistics/notifyViewEvent',
    async (credentials, {rejectWithValue}) => {

        const response = await fetch(`${apiHost}/api/cms/items/view-event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: credentials.menuItemId
        });

        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData);
        }

        return await response.json();
    }
);

export const notifyViewEventSlice = createSlice({
    name: 'notifyViewEvent',
    initialState: {
        isLoading: false
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(notifyViewEvent.pending, state => {
                state.isLoading = true;
            })
            .addCase(notifyViewEvent.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(notifyViewEvent.rejected, state => {
                state.isLoading = false;
            })
    }
});

export const viewedMenuItemsSlice = createSlice(
    {
        name: 'viewedMenuItems',
        initialState: {
            menuItems: [],
        },
        reducers: {
            setMenuItems: (state, action) => {
                state.menuItems = action.payload;
            },
        }
    });

export const {setMenuItems} = viewedMenuItemsSlice.actions;

const statisticsReducer = combineReducers({
    notifyViewEvent: notifyViewEventSlice.reducer,
    menuItemViews: viewedMenuItemsSlice.reducer
});

export default statisticsReducer;
