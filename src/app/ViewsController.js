import React from "react";
import {useSelector} from "react-redux";
import {MenuItemDetails} from "./menu/menu-item-details/MenuItemDetails";
import {Menu} from "./menu/Menu";
import {Onboarding} from "./onboarding/Onboarding";

export const ViewsController = () => {
    const {menuItem, onboardingActive} = useSelector(state => state.dishesCategories.view);

    const renderViews = () => {
        if(onboardingActive) {
            return (<Onboarding/>)
        }

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