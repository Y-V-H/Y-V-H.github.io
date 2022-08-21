import React from "react";

type ButtonInfoProps = {
    className?: string
}

export const ButtonInfo = ({
    className
}: ButtonInfoProps) => {
    return (
        <button className={`a-button-info ${className ? className : ''}`}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </button>
    )
}