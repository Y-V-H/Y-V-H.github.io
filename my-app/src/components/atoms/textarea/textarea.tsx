import React from 'react';
import { clsx } from 'clsx';

interface TextareaProps {
    children?: React.ReactNode;
    className?: string;
    label?: string;
    cols?: number;
    rows?: number;
    placeholder?: string;
}

export const Textarea = ({
    children,
    className,
    label,
    cols = 30,
    rows = 5,
    placeholder
}: TextareaProps) => {
    let labelId = '';

    if (label) {
        labelId = label.replace(/\s/g, '')
    }

    return (
        <div className='a-textarea-wr'>
            {label && <label htmlFor={labelId} className='a-textarea__label'>{label}</label>}
            <textarea
                name={label}
                id={labelId}
                cols={cols}
                rows={rows}
                className={clsx(`a-textarea ${className}`)}
                placeholder={placeholder}
            >
                {children}
            </textarea>
        </div>
    )
}