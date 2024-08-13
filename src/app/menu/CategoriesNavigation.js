import React, {useEffect} from "react";
import {SearchIcon} from "../icons/SearchIcon";
import {useDispatch, useSelector} from "react-redux";
import {
    filter,
    getCategories,
    setCategory,
    setFilterActive,
    setFilteredItems,
    setFilterExpanded,
    setFilterValue
} from "../../slices/dishesCategoriesSlice";
import {getTranslation} from "../../locales/langUtils";
import {FilteringForm} from "./FilteringForm";

export const CategoriesNavigation = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.dishesCategories.getCategories);
    const chosenCategory = useSelector(state => state.dishesCategories.view.category)
    const {filterExpanded, filterValue} = useSelector(state => state.dishesCategories.view);

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = async () => {
        const resultAction = await dispatch(getCategories());
        if(getCategories.fulfilled.match(resultAction)) {
            setInitialCategory(resultAction.payload);
        }
    }

    const setInitialCategory = (payload) => {
        if(chosenCategory) {
            return;
        }
        dispatch(setCategory(payload.length !== 0 ? payload[0] : null));
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault()
        dispatch(setFilterValue(e.target.value));
        await executeFilter(e.target.value);
    }

    const executeFilter = async value => {
        if ('' !== value) {
            dispatch(setFilterActive(true));
            const resultAction = await dispatch(filter({path: 'items', value: value}));
            if (filter.fulfilled.match(resultAction)) {
                dispatch(setFilteredItems(resultAction.payload));
            }
        } else {
            dispatch(setFilterActive(false));
            dispatch(setFilteredItems(null));
        }
    }

    const chooseCategory = (category) => {
        dispatch(setCategory(category));
    }

    const renderCategoriesButtons = () => {
        if(categories.length === 0) {
            return (
                <div className={'nav-category'}>
                    <span>Brak kategorii</span>
                </div>
            );
        }
        return categories.map(category => (
            <div className={`nav-category ${category?.id === chosenCategory?.id ? 'active' : ''}`}
                 onClick={() => chooseCategory(category)}>
                <span>{getTranslation(category?.name)}</span>
            </div>
            ));
    }

    return (
        <div className={'nav-container'}>
            <div className={`search-button ${filterExpanded ? 'search-active' : ''}`}>
                <button className={`search-initial-circle ${filterExpanded ? 'circle-active' : ''}`}
                        onClick={() => dispatch(setFilterExpanded(!filterExpanded))}>
                    <SearchIcon/>
                </button>
                {filterExpanded ? <FilteringForm value={filterValue} searchSubmit={handleSearchSubmit}/> : <></>}
            </div>
            {renderCategoriesButtons()}
        </div>
    );
}