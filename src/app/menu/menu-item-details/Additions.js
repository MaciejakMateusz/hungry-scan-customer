import React from "react";
import {getTranslation} from "../../../locales/langUtils";
import {formatPrice} from "../../../utils";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

export const Additions = () => {
    const {t} = useTranslation();
    const {menuItem} = useSelector(state => state.dishesCategories.view);


    if (menuItem?.additionalIngredients.length === 0) {
        return <></>;
    }

    return (
        <>
            <div className={'details-definition-text'}>
                {t('additions')}
                <span className={'optional-text'}> ({t('optional')}):</span>
            </div>
            <div className={'details-list-positions-wrapper'}>
                {menuItem.additionalIngredients.map(addition => (
                    <div className={'details-list-position-container'}>
                        <span className={'details-list-position-text'}>{getTranslation(addition.name)}</span>
                        <span className={'details-list-addition-price'}>+ {formatPrice(addition.price)} zł</span>
                    </div>
                ))}
            </div>
        </>
    );
}