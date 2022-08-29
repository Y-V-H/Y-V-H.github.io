import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({
    size,
    className,
    children
}) => {
    return React.createElement(size, { className: `a-header a-header--${size} ${className ? className : ''}` }, children)
}

Header.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}