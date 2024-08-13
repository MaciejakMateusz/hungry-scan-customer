import React from "react";
import {useSelector} from "react-redux";
import {MenuItem} from "./MenuItem";

export const MenuItemsList = () => {
    const chosenCategory = useSelector(state => state.dishesCategories.view.category);
    const {filterActive, filteredItems} = useSelector(state => state.dishesCategories.view);

    const renderMenuItems = () => {
        if (!chosenCategory) {
            return (<></>);
        }

        if(filterActive) {
            return filteredItems?.map(menuItem => (
                <MenuItem menuItem={menuItem}/>
            ))
        }

        return chosenCategory.menuItems.map(menuItem => (
            <MenuItem menuItem={menuItem}/>
        ));
    }

    return (
        <div className={'menu-items-wrapper'}>
            {renderMenuItems()}
        </div>
    );
}