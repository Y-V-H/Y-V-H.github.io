import PropTypes from 'prop-types';
import React from "react";

export const ButtonInfo = ({
    className
}) => {
    return (
        <button className={`a-button-info ${className ? className : ''}`}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </button>
    )
}

ButtonInfo.propTypes = {
    className: PropTypes.string,
}