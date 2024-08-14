import React from "react";
import {PriceFooter} from "./PriceFooter";
import {ImageSection} from "./ImageSection";
import {DataSection} from "./DataSection";

export const MenuItemDetails = () => {

    return (
        <div className={'menu-item-details-container'}>
            <ImageSection/>
            <DataSection/>
            <PriceFooter/>
        </div>
    );
}