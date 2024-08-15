import React from "react";
import {LocalizationContainer} from "./LocalizationContainer";
import {WelcomeTextContainer} from "./WelcomeTextContainer";
import {CategoriesNavigation} from "./CategoriesNavigation";
import {MenuItemsList} from "./MenuItemsList";

export const Menu = () => {

    return (
        <div>
            <LocalizationContainer/>
            <WelcomeTextContainer/>
            <CategoriesNavigation/>
            <MenuItemsList/>
        </div>
    );
}
