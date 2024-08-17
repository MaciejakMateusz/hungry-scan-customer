import React from "react";
import {useSelector} from "react-redux";
import {Tooltip} from "./Tooltip";
import {getTranslation} from "../../../locales/langUtils";
import {ReactSVG} from "react-svg";

export const Labels = () => {
    const {menuItem} = useSelector(state => state.dishesCategories.view);
    const hasBanner = menuItem.new || menuItem.bestseller;
    const imgName = menuItem.imageName;

    if (menuItem?.labels === 0) {
        return (<></>);
    }

    return (
        <div className={`details-labels-container ${!hasBanner ? 'no-banner' : ''} ${!imgName ? 'no-image' : ''}`}>
            {menuItem.labels.map(label => (
                <Tooltip content={getTranslation(label?.name)}
                         key={label?.id}>
                    <ReactSVG className={'details-label-icon'}
                              src={`${process.env.PUBLIC_URL}/theme/icons/${label?.iconName}`}
                    />
                </Tooltip>
            ))}
        </div>
    );
}