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
    setFilterValue,
    setIsLoading
} from "../../slices/dishesCategoriesSlice";
import {getTranslation} from "../../locales/langUtils";
import {FilteringForm} from "./FilteringForm";
import {wait} from "@testing-library/user-event/dist/utils";
import {useTranslation} from "react-i18next";
import {LoadingSpinner} from "../icons/LoadingSpinner";

export const CategoriesNavigation = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {categories} = useSelector(state => state.dishesCategories.getCategories);
    const chosenCategory = useSelector(state => state.dishesCategories.view.category);
    const {filterExpanded, filterValue} = useSelector(state => state.dishesCategories.view);
    const {isPending} = useSelector(state => state.dishesCategories.filter);
    const {isLoading} = useSelector(state => state.dishesCategories.getCategories);

    const fetchCategories = async () => {
        const resultAction = await dispatch(getCategories());
        if(getCategories.fulfilled.match(resultAction)) {
            setInitialCategory(resultAction.payload);
        }
    };

    useEffect(() => {
        if(categories?.length !== 0) {
            return;
        }
        dispatch(setIsLoading(true));
        wait(1000)
            .then(() => fetchCategories());
    }, [dispatch]);

    const setInitialCategory = (payload) => {
        if(chosenCategory) {
            return;
        }
        dispatch(setCategory(payload.length !== 0 ? payload[0] : null));
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        dispatch(setFilterValue(e.target.value));
        await executeFilter(e.target.value);
    };

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
    };

    const renderCategoriesButtons = () => {
        if(categories.length === 0) {
            return (
                <div className={'nav-category'}>
                    <span>{t('noCategories')}</span>
                </div>
            );
        }
        return categories.map(category => (
            <div key={category.id}
                 className={`nav-category ${category?.id === chosenCategory?.id ? 'active' : ''}`}
                 onClick={() => dispatch(setCategory(category))}>
                <span>{getTranslation(category?.name)}</span>
            </div>
        ));
    };

    return (
        <div className={'nav-container'}>
            <div className={`search-button ${filterExpanded ? 'search-active' : ''}`}>
                <button className={`search-initial-circle ${filterExpanded ? 'circle-active' : ''}`}
                        onClick={() => dispatch(setFilterExpanded(!filterExpanded))}>
                    <SearchIcon/>
                </button>
                <div className={`search-form-container ${filterExpanded ? 'visible' : 'hidden'}`}>
                    <FilteringForm value={filterValue} searchSubmit={handleSearchSubmit}/>
                    {filterValue !== '' && <span className={'clear-filter-x'} onClick={() => dispatch(setFilterValue(''))}>x</span>}
                </div>
            </div>
            {(isLoading || isPending) && <LoadingSpinner/>}
            {renderCategoriesButtons()}
        </div>
    );
};