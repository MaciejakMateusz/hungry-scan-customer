import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {MenuItemDetails} from "./menu/menu-item-details/MenuItemDetails";
import {Menu} from "./menu/Menu";
import {Onboarding} from "./onboarding/Onboarding";
import {notifyViewEvent, setMenuItems} from "../slices/statisticsSlice";

export const ViewsController = () => {
    const dispatch = useDispatch();
    const {menuItem, onboardingActive} = useSelector(state => state.dishesCategories.view);
    const {menuItems} = useSelector(state => state.statistics.menuItemViews);

    const renderViews = () => {
        if (onboardingActive) {
            return (<Onboarding/>)
        }

        if (menuItem) {
            if (!menuItems.includes(menuItem.id)) {
                dispatch(setMenuItems([...menuItems, menuItem.id]));
                dispatch(notifyViewEvent({menuItemId: menuItem.id}));
            }
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