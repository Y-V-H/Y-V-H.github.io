import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
    children,
    className
}) => {
    return <button className={`a-btn ${className}`}>{children}</button>
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}