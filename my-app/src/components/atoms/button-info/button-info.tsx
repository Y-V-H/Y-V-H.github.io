import React from "react";
import { clsx } from 'clsx';

interface ButtonInfoProps {
    className?: string
}

export const ButtonInfo = ({
    className
}: ButtonInfoProps) => {
    return (
        <button className={clsx(`a-button-info ${className}`)}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </button>
    )
}