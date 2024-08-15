import React from "react";
import {Banner} from "./menu-item-details/Banner";
import {imagesPath} from "../../apiData";
import {LazyLoadImage} from 'react-lazy-load-image-component';

export const MenuItemImage = ({menuItem}) => {
    const imgName = menuItem.imageName;

    if (!imgName) {
        return (<></>);
    }

    return (
        <div className={`menu-item-image-container`}>
            <Banner menuItem={menuItem}/>
            <LazyLoadImage
                className={'menu-item-image'}
                alt="img"
                src={imagesPath + imgName}
                placeholderSrc={`${process.env.PUBLIC_URL}/theme/images/placeholder-image.png`}
            />
        </div>
    );
}