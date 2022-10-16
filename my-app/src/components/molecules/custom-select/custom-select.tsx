import React from "react";
import Select from 'react-select';

interface CustomSelectProps {
    options: object[];
    defaultValue?: string;
    handleChange?: any;
    label?: string;
    isTransparentBackground?: boolean;
}

export const CustomSelect = ({
    handleChange,
    options,
    label,
    isTransparentBackground,
    defaultValue
}: CustomSelectProps) => {

    const isBackground = isTransparentBackground ? {
        background: 'rgba(80, 80, 80, 0.8)',
        padding: '10px 18px'
    } : {
        backgroundColor: 'inherit',
    }

    const colorStyle = {
        control: (styles: any) => ({
            ...styles,
            ...isBackground,
            border: '0',
            fontFamily: 'montserrat-regular',
            fontSize: '16px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            color: 'red'
        }),
        dropdownIndicator: (styles: any) => ({
            ...styles,
            color: "#F65261"
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: '#fff',
            opacity: '0.6'
        }),
        option: (styles: any) => ({
            ...styles,
            fontFamily: 'montserrat-regular',
            fontSize: '12px',
            textTransform: 'uppercase',
            color: 'hsl(0, 0%, 20%)'
        })
    }

    return (
        <>
            {label ? <label htmlFor="" className="a-input__label">{label}</label> : null}        
            <Select
                id={label}
                options={options}
                styles={colorStyle}
                onChange={handleChange}
                // defaultValue={defaultValue || 'Select'}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </>
    )
}