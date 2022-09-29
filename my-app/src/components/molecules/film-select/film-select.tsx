import React from "react";
import Select from 'react-select';

const colorStyle = {
    control: (styles: any) => ({
        ...styles,
        backgroundColor: 'inherit',
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
    })
}

const option = [
    {value: 'rating', label: 'Rating'},
    {value: 'genre', label: 'Genre'},
    {value: 'release date', label: 'Release date'}
]

interface FilmSelectProps {
    handleChange: any
}

export const FilmSelect = ({
    handleChange
}: FilmSelectProps) => {

    return (
        <Select 
            options={option}
            styles={colorStyle}
            onChange={handleChange}
            components={{
                IndicatorSeparator: () => null
            }}
        />
    )
}