import React from "react";
import {useSelector} from "react-redux";
import {MenuItemDetails} from "./menu/menu-item-details/MenuItemDetails";
import {Menu} from "./menu/Menu";

export const ViewsController = () => {
    const {menuItem} = useSelector(state => state.dishesCategories.view);

    const renderViews = () => {
        if(menuItem) {
            return (<MenuItemDetails/>);
        }
        return (<Menu/>);
    }

    return (
        <>
            {renderViews()}
        </>
    );
}