import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sortBySlice from './sort-by-slice-reducer';

interface oneFilmData {
    'id': number;
    'title': string;
    'tagline': string;
    'vote_average': number;
    'vote_count': number;
    'release_date': string;
    'poster_path': string;
    'overview': string;
    'budget': number;
    'revenue': number;
    'genres': string[];
    'runtime': number;
}

export interface filmsDataProps {
    sortBySlice: {
        filmsData: oneFilmData[],
        currentFilm: oneFilmData
    }
}

const rootReducer = combineReducers({
    sortBySlice
})

export const store = configureStore({
    reducer: rootReducer
})