import React, { useState } from 'react';
import { clsx } from 'clsx';

interface InputTextProps {
    className?: string;
    defaultInputValue?: string;
    placeholder?: string;
    label?: string;
    onlyNumber?: boolean
}

export const InputText = ({
    className,
    defaultInputValue,
    placeholder,
    label,
    onlyNumber
}: InputTextProps) => {
    const [inputValue, setInputValue] = useState('');
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
    const handlerChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const re = new RegExp('^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$');
        if (e.target.value === '' || re.test(e.target.value)) {
            setInputValue(e.target.value)
        }
    };
    let labelId = '';

    if (label) {
        labelId = label.replace(/\s/g, '')
    }

    return (
        <>
            {label && <label htmlFor={labelId} className='a-input__label'>{label}</label>}
            <input
                type="text"
                className={clsx(`a-input ${className}`)}
                value={defaultInputValue ? defaultInputValue : inputValue}
                placeholder={placeholder}
                onChange={onlyNumber ? handlerChangeNumber : handlerChange}
                id={labelId ? labelId : null}
            />
        </>
    )
}
