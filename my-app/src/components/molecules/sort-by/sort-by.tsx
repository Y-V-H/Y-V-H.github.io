import React from "react";
import { CustomSelect } from '../custom-select/custom-select'
import { sortByMoviesFetch } from '../../../toolkit-store/sort-by-slice-reducer';
import { useDispatch  } from 'react-redux';

const options = [
    {value: 'rating', label: 'Rating'},
    {value: 'genre', label: 'Genre'},
    {value: 'release date', label: 'Release date'}
]

export const SortBy = () => {
    const dispatch = useDispatch<any>();

    const handleChange = async (selectOption: {value: string, label: string}) => {
        dispatch( sortByMoviesFetch(selectOption.value) );
    }

    return (
        <div className="m-sort-by">
            <span className="m-sort-by__text">SORT BY</span>
            <CustomSelect handleChange={handleChange} options={options}/>
        </div>
    )
} 