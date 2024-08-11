import React from "react";
import {LocalizationContainer} from "./LocalizationContainer";
import {WelcomeTextContainer} from "./WelcomeTextContainer";
import {CategoriesNavigation} from "./CategoriesNavigation";
import {MenuItemsList} from "./MenuItemsList";

export const Menu = () => {
    return (
        <>
            <LocalizationContainer/>
            <WelcomeTextContainer/>
            <CategoriesNavigation/>
            <MenuItemsList/>
        </>
    );
}
