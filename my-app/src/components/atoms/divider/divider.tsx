import React from 'react';
import { clsx } from 'clsx';

interface DividerProps {
    className?: string
}

export const Divider = ({ className }: DividerProps) => <hr className={clsx(`a-divider ${className}`)} />
