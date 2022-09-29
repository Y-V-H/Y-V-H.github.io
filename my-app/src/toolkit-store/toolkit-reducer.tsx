import { createReducer, createAction } from "@reduxjs/toolkit";
import { filmCards } from '../../assets/mock-data/film-cards';

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
    toolkit: {
        filmsData: oneFilmData[],
        currentFilm: oneFilmData
    }
}

const UPDATE_FILMS_DATA = 'todos/updatefilms';

const initialState = {
    filmsData: filmCards
};

export const updateFilmsData = createAction(UPDATE_FILMS_DATA)

export const toolkitReducer = createReducer(initialState, builder => {
    builder
        .addCase(updateFilmsData, (state, action) => {
            state.filmsData = action.payload
        })
})
