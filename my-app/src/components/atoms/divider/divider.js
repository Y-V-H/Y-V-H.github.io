import React from 'react';
import PropTypes from 'prop-types';

export const Divider = ({ className }) => <hr className={`a-divider ${className ? className : ''}`} />


Divider.propTypes = {
    className: PropTypes.string,
}