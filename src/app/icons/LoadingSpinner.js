import React from 'react';

export const LoadingSpinner = ({buttonMode, customStyle, customContainerStyle}) => {

    return (
        <div className={buttonMode ? 'button-spinner-container' : 'spinner-container'}
             style={customContainerStyle ? customContainerStyle : {}}>
            <div className={buttonMode ? 'button-spinner' : 'spinner'}
                 style={customStyle ? customStyle : {}}/>
        </div>
    );
};