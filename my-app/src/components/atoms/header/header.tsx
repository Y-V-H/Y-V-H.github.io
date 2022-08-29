import React from 'react';
import { clsx } from 'clsx';

interface HeaderProps {
    size: string;
    children: string
    className?: string;
}

export const Header = ({
    size,
    className,
    children
}: HeaderProps) => {
    return React.createElement(size, { className: clsx(`a-header a-header--${size} ${className}`) }, children)
}