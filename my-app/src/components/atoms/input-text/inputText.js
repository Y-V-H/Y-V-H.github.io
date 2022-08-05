import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const InputText = ({
    className,
    defaultInputValue,
    placeholder
}) => {
    const [inputValue, setInputValue] = useState();
    const handlerChange = (e) => setInputValue(e.target.value);

    return (
        <input
            type="text"
            className={`a-input ${className ? className : ''}`}
            value={defaultInputValue ? defaultInputValue : inputValue}
            placeholder={placeholder}
            onChange={handlerChange}
        />
    )
}

InputText.propTypes = {
    className: PropTypes.string,
    defaultInputValue: PropTypes.string,
    placeholder: PropTypes.string
}