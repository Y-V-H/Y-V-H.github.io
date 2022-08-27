import React, { useState } from 'react';
import { clsx } from 'clsx';

interface InputTextProps {
    className?: string;
    defaultInputValue?: string;
    placeholder?: string;
}

export const InputText = ({
    className,
    defaultInputValue,
    placeholder
}: InputTextProps) => {
    const [inputValue, setInputValue] = useState("");
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    return (
        <input
            type="text"
            className={clsx(`a-input ${className}`)}
            value={defaultInputValue ? defaultInputValue : inputValue}
            placeholder={placeholder}
            onChange={handlerChange}
        />
    )
}
