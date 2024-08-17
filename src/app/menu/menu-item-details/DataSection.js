import React, {useEffect} from "react";
import {Banner} from "./Banner";
import {NameAndDescription} from "./NameAndDescription";
import {Allergens} from "./Allergens";
import {Variants} from "./Variants";
import {Additions} from "./Additions";
import {useDispatch, useSelector} from "react-redux";
import {getVariants} from "../../../slices/dishesCategoriesSlice";

export const DataSection = () => {
    const dispatch = useDispatch();
    const {menuItem} = useSelector(state => state.dishesCategories.view);
    const imgName = menuItem.imageName;

    useEffect(() => {
        dispatch(getVariants());
    }, [dispatch])

    return (
        <section className={`details-data-section ${!imgName ? 'no-image' : ''}`}>
            <div className={'details-data-container'}>
                <Banner detailMode={true} menuItem={menuItem}/>
                <NameAndDescription/>
                <Allergens/>
                <Variants/>
                <Additions/>
            </div>
        </section>
    );
}