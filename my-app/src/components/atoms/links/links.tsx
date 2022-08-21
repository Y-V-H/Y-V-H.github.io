import React from 'react';

type LinkProps = {
    href: string;
    title: string;
    children: string;
    className?: string;
    target?: string;
}

export const Link = ({
    href,
    title,
    className,
    target,
    children
}: LinkProps) => {
    return (
        <a
            href={href}
            className={`a-link ${className ? className : ''}`}
            title={title}
            target={target}
        >
            {children}
        </a>
    )
}
