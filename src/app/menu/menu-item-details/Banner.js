import React from "react";
import {useTranslation} from "react-i18next";

export const Banner = ({detailMode, menuItem}) => {
    const {t} = useTranslation();

    if (menuItem?.bestseller) {
        return (<span className={detailMode ? 'details-banner' : 'menu-item-banner'}>{t('bestseller')}</span>);
    } else if (menuItem?.new) {
        return (<span className={detailMode ? 'details-banner' : 'menu-item-banner'}>{t('new')}</span>);
    }
}