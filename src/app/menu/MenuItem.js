import React from "react";
import {imagesPath} from "../../apiData";
import {getTranslation} from "../../locales/langUtils";
import {formatPrice} from "../../utils";

export const MenuItem = ({menuItem}) => {
    return (
        <div className={'menu-item-container'}>
            <div className={`menu-item-grid ${!menuItem.imageName ? 'no-photo' : ''}`}>
                {!menuItem.imageName ?
                    <></> :
                    <div className={`menu-item-image-container`}>
                        <img className={'menu-item-image'} src={imagesPath + menuItem.imageName}
                             alt={'pizza-margherita'}/>
                    </div>
                }
                <div className={`menu-item-text-data-grid ${!menuItem.imageName ? 'no-photo' : ''}`}>
                    <div className={'menu-item-name'}>{getTranslation(menuItem.name)}</div>
                    <div className={'menu-item-description'}>{getTranslation(menuItem.description)}</div>
                    <div className={'menu-item-price'}>{formatPrice(menuItem.price)} zł</div>
                </div>
            </div>
        </div>
    );
}