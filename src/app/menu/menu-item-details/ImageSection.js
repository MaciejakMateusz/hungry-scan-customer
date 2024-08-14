import React from "react";
import {imagesPath} from "../../../apiData";
import {setMenuItem} from "../../../slices/dishesCategoriesSlice";
import {useDispatch, useSelector} from "react-redux";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {ArrowLeftIcon} from "../../icons/ArrowLeftIcon";

export const ImageSection = () => {
    const dispatch = useDispatch();
    const {menuItem} = useSelector(state => state.dishesCategories.view);
    const imgName = menuItem.imageName;

    const hideDetails = () => {
        dispatch(setMenuItem(null));
    }

    return (
        <section className={'details-image-section'}>
            <button className={'return-button'} onClick={hideDetails}><ArrowLeftIcon/></button>
            <div className={'details-image-container'}>
                {imgName &&
                    <LazyLoadImage
                        className={'details-image'}
                        alt="img"
                        src={imagesPath + imgName}
                        placeholderSrc={`${process.env.PUBLIC_URL}/theme/images/placeholder-image.png`}
                    />}
            </div>
        </section>
    );
}