import React, { useState } from 'react';
import { clsx } from 'clsx';

interface InputTextProps {
    className?: string;
    formikValue?: string | number;
    placeholder?: string;
    label?: string;
    onlyNumber?: boolean;
    formikHandlerChange?: (e: React.ChangeEvent<HTMLInputElement>, r: boolean ) => void;
    name?: string;
    formikError?: any;
}

export const InputText = ({
    className,
    formikValue,
    placeholder,
    label,
    onlyNumber,
    formikHandlerChange,
    name,
    formikError
}: InputTextProps) => {
    const [inputValue, setInputValue] = useState('');
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    };
    const firminkHuermik = (e: React.ChangeEvent<HTMLInputElement>) => {
        formikHandlerChange(e,onlyNumber)
    }
    let labelId = '';

    if (label) {
        labelId = label.replace(/\s/g, '_')
    }

    return (
        <div className={clsx(`a-input-wr ${!!formikError ? 'a-input-wr__with-error' : ''}`)} >
            {label && <label htmlFor={labelId} className='a-input__label'>{label}</label>}
            <input
                type="text"
                className={clsx(`a-input ${className} ${!!formikError ? 'a-input__error' : ''}`)}
                value={formikValue ? formikValue : inputValue}
                placeholder={placeholder}
                onChange={formikHandlerChange ? firminkHuermik : handlerChange}
                id={labelId ? labelId : null}
                name={name}
            />
            {true ? <span className='a-input_error-message'>{formikError}</span> : null}
        </div>
    )
}
