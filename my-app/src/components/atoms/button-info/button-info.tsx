import React from 'react';
import { clsx } from 'clsx';

interface ButtonInfoProps {
    onClick: () => void;
    className?: string;
}

export const ButtonInfo = ({
    onClick,
    className
}: ButtonInfoProps) => {
    const handlerClick = (event: React.MouseEvent)=> {
        onClick();
        event.stopPropagation();
    }

    return (
        <button className={clsx(`a-button-info ${className}`)} onClick={handlerClick}>
            <i className='icon icon-dot-3' />
        </button>
    )
}