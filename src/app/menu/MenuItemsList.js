import React from "react";
import {useSelector} from "react-redux";
import {MenuItem} from "./MenuItem";
import {useTranslation} from "react-i18next";

export const MenuItemsList = () => {
    const {t} = useTranslation();
    const chosenCategory = useSelector(state => state.dishesCategories.view.category);
    const {filterActive, filteredItems} = useSelector(state => state.dishesCategories.view);
    const {isPending} = useSelector(state => state.dishesCategories.filter);
    const noPositions = chosenCategory?.menuItems.length === 0;
    const noFilteredItems = filterActive && (!filteredItems || filteredItems?.length === 0) && !isPending;

    const renderMenuItems = () => {
        if (!chosenCategory) {
            return (<></>);
        }

        if(filterActive) {
            return filteredItems?.map(menuItem => (
                <MenuItem key={menuItem?.id} menuItem={menuItem}/>
            ))
        }

        return chosenCategory.menuItems.map(menuItem => (
            <MenuItem key={menuItem?.id} menuItem={menuItem}/>
        ));
    }

    return (
        <div className={'menu-items-wrapper'}>
            {renderMenuItems()}
            {(noPositions || noFilteredItems) && <p className={'no-positions-text'}>{t('noPositions')}</p>}
        </div>
    );
}