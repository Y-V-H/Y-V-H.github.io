import React from 'react';

type DividerProps = {
    className?: string
}

export const Divider = ({ className }: DividerProps) => <hr className={`a-divider ${className ? className : ''}`} />
