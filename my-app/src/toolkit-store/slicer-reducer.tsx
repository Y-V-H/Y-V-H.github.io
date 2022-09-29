import { createSlice } from "@reduxjs/toolkit";
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

const initialState = {
    filmsData: filmCards,
    currentFilm: ''
};

const toolkitSlice = createSlice({
    name: 'todos/updatefilms',
    initialState: initialState,
    reducers: {
        updateFilmsData(state, action){
            state.filmsData = action.payload
        },
        updateCurrentFilmData(state, action){
            state.currentFilm = action.payload
        }
    }
})

export default toolkitSlice.reducer;
export const { updateFilmsData, updateCurrentFilmData } = toolkitSlice.actions;
