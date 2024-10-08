import React from "react";
import {useSelector} from "react-redux";
import {Tooltip} from "./Tooltip";
import {getTranslation} from "../../../locales/langUtils";
import {ReactSVG} from "react-svg";
import {useTranslation} from "react-i18next";

export const Allergens = () => {
    const {menuItem} = useSelector(state => state.dishesCategories.view);
    const {t} = useTranslation();

    if (menuItem?.allergens.length === 0) {
        return <></>;
    }

    return (
        <>
            <div className={'details-definition-text'}>{t('allergens')}:</div>
            <div className={'details-allergens-container'}>
                {menuItem?.allergens.map(allergen => (
                    <Tooltip content={getTranslation(allergen?.description)}
                             key={allergen?.id}>
                        <ReactSVG className={'details-allergen-icon'}
                                  src={`${process.env.PUBLIC_URL}/theme/icons/${allergen.iconName}`}
                        />
                    </Tooltip>
                ))}
            </div>
        </>
    );
}