import React from "react";
import Select from 'react-select';
import { updateFilmsData } from '../../../toolkit-store/slicer-reducer';
import { useDispatch  } from 'react-redux';

const option = [
    {value: 'rating', label: 'Rating'},
    {value: 'genre', label: 'Genre'},
    {value: 'release date', label: 'Release date'}
]

export const SortBy = () => {
    const dispatch = useDispatch();

    const handleChange = (selectOption: {value: string, label: string}) => {
        dispatch(sortFilmsByFilter(selectOption.value))
    }

    const sortFilmsByFilter = (sortBy: string) => {
        return async (dispatch: any) => {
            fetch(`http://localhost:4000/movies`)
            .then(( response ) => response.json())
            .then( res => {
                dispatch(updateFilmsData(res.data))
            })
        }
    }

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
            option: '0.1'
        })
    }

    return (
        <div className="m-sort-by">
            <span className="m-sort-by__text">SORT BY</span>
            {/* <button className="m-sort-by__btn">release date</button> */}
            <Select
                options={option}
                onChange={handleChange}
                styles={colorStyle}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </div>
    )
} 