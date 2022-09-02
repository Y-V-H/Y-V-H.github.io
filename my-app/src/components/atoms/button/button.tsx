import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
    children?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
    children,
    className,
    onClick
}: ButtonProps) => {
    return (
        <button
            className={clsx(`a-btn ${className}`)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}