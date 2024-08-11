import React from "react";
import {SearchIcon} from "../icons/SearchIcon";

export const CategoriesNavigation = () => {
    return (
        <div className={'nav-container'}>
            <div className={'nav-filter'}>
                <SearchIcon/>
            </div>
            <div className={'nav-category active'}>
                <span>Pizza</span>
            </div>
            <div className={'nav-category'}>
                <span>Tortilla</span>
            </div>
            <div className={'nav-category'}>
                <span>Calzone</span>
            </div>
            <div className={'nav-category'}>
                <span>Dania główne</span>
            </div>
            <div className={'nav-category'}>
                <span>Dania główne</span>
            </div>
            <div className={'nav-category'}>
                <span>Dania główne</span>
            </div>
            <div className={'nav-category'}>
                <span>Dania główne</span>
            </div>
            <div className={'nav-category'}>
                <span>Dania główne</span>
            </div>
        </div>
    );
}