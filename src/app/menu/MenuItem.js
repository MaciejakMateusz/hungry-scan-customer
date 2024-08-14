import React from "react";
import {useDispatch} from "react-redux";
import {setMenuItem} from "../../slices/dishesCategoriesSlice";
import {MenuItemImage} from "./MenuItemImage";
import {MenuItemContent} from "./MenuItemContent";

export const MenuItem = ({menuItem}) => {
    const dispatch = useDispatch();

    return (
        <div className={'menu-item-container'} onClick={() => dispatch(setMenuItem(menuItem))}>
            <div className={`menu-item-grid ${!menuItem.imageName ? 'no-photo' : ''}`}>
                <MenuItemImage menuItem={menuItem}/>
                <MenuItemContent menuItem={menuItem}/>
            </div>
        </div>
    );
}