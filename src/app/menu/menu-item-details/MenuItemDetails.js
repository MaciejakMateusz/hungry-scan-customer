import React, {useEffect} from "react";
import {PriceFooter} from "./PriceFooter";
import {ImageSection} from "./ImageSection";
import {DataSection} from "./DataSection";

export const MenuItemDetails = () => {

    useEffect(() => {
        window.scrollTo({ top: 0});
    }, []);

    return (
        <div className={'menu-item-details-container'}>
            <ImageSection/>
            <DataSection/>
            <PriceFooter/>
        </div>
    );
}