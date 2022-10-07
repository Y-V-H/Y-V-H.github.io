import React from "react";
import { FilmSelect } from '../film-select/film-select'
import { sortByMoviesFetch } from '../../../toolkit-store/sort-by-slice-reducer';
import { useDispatch  } from 'react-redux';

export const SortBy = () => {
    const dispatch = useDispatch<any>();

    const handleChange = async (selectOption: {value: string, label: string}) => {
        dispatch( sortByMoviesFetch(selectOption.value) );
    }

    return (
        <div className="m-sort-by">
            <span className="m-sort-by__text">SORT BY</span>
            <FilmSelect handleChange={handleChange}/>
        </div>
    )
} 