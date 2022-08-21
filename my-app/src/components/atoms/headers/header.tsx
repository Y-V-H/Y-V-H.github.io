import React from 'react';

type HeaderProps = {
    size: string;
    children: string
    className?: string;
}

export const Header = ({
    size,
    className,
    children
}: HeaderProps) => {
    return React.createElement(size, { className: `a-header a-header--${size} ${className ? className : ''}` }, children)
}