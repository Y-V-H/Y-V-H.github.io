import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
    children: string;
    className?: string;
}

export const Button = ({
    children,
    className
}: ButtonProps) => {
    return <button className={clsx(`a-btn ${className}`)}>{children}</button>
}