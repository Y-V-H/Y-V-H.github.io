import React from 'react';

type ButtonProps = {
    children: string;
    className?: string;
}

export const Button = ({
    children,
    className
}: ButtonProps) => {
    return <button className={`a-btn ${className}`}>{children}</button>
}