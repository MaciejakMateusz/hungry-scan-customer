import React from "react";
import {LocalizationIcon} from "../icons/LocalizationIcon";

export const LocalizationContainer = () => {
    return (
        <div className={'localization-container'}>
            <LocalizationIcon/>
            <span className={'localization-text'}>Dom Retro Pivnica</span>
        </div>
    );
}