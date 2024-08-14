import React from "react";
import {getTranslation} from "../../locales/langUtils";
import {formatPrice} from "../../utils";

export const MenuItemContent = ({menuItem}) => {
    return (
        <div className={`menu-item-text-data-grid ${!menuItem.imageName ? 'no-photo' : ''}`}>
            <div className={'menu-item-name'}>{getTranslation(menuItem.name)}</div>
            <div className={'menu-item-description'}>{getTranslation(menuItem.description)}</div>
            <div className={'menu-item-price'}>{formatPrice(menuItem.price)} zł</div>
        </div>
    );
}