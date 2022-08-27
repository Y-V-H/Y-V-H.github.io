import React from 'react';
import { clsx } from 'clsx';

interface LinkProps {
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
            className={clsx(`a-link ${className}`)}
            title={title}
            target={target}
        >
            {children}
        </a>
    )
}
