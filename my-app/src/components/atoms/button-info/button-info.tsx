import React from 'react';
import { clsx } from 'clsx';

interface ButtonInfoProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export const ButtonInfo = ({
    onClick,
    className
}: ButtonInfoProps) => {
    return (
        <button className={clsx(`a-button-info ${className}`)} onClick={onClick}>
            <i className='icon icon-dot-3' />
        </button>
    )
}