import React from "react";
// import Select from 'react-select';
import { FilmSelect } from '../film-select/film-select'
// import { updateFilmsData } from '../../../toolkit-store/slice-reducer';
import { getMovies } from '../../../toolkit-store/sort-by-slice-reducer';
import { useDispatch  } from 'react-redux';

// const getMovies = async (sortByValue?:string) => {
//     const url = `http://localhost:4000/movies${sortByValue ? `?sortBy=${sortByValue}` : ''}`;
//     const response = await (await fetch(url)).json();

//     return response.data;
// }

export const SortBy = () => {
    const dispatch = useDispatch<any>();

    // const sortFilmsByFilter = async (sortBy: string) => {
    //     const movies = await getMovies(sortBy);

    //     dispatch(updateFilmsData(movies));
    // }

    // const handleChange = async (selectOption: {value: string, label: string}) => {
    //     await sortFilmsByFilter(selectOption.value);
    // }
    const handleChange = async (selectOption: {value: string, label: string}) => {
        dispatch( getMovies(selectOption.value) );
    }

    return (
        <div className="m-sort-by">
            <span className="m-sort-by__text">SORT BY</span>
            <FilmSelect handleChange={handleChange}/>
        </div>
    )
} 