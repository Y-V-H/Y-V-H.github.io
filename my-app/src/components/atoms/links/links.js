import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({
    href,
    title,
    className,
    target,
    children
}) => {
    return (
        <a
            href={href}
            className={`a-link ${className ? className : ''}`}
            title={title}
            target={target}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    title: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}