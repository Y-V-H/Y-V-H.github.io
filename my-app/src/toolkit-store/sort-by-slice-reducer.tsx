import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmCards } from '../../assets/mock-data/film-cards';

const initialState = {
    filmsData: filmCards,
    currentFilm: ''
};

export const getMovies = createAsyncThunk(
    "todos/fetch", 
    async (sortByValue?:string) => {
        const url = `http://localhost:4000/movies?sortOrder=asc${sortByValue ? `&sortBy=${sortByValue}` : ''}`;
        const response = await (await fetch(url)).json();

        return response.data;
    }
)

const sortBySlice = createSlice({
    name: 'sortBy',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.filmsData = action.payload
        });
    }
})

export default sortBySlice.reducer;
