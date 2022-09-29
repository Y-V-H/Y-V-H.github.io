import { createSlice } from "@reduxjs/toolkit";
import { filmCards } from '../../assets/mock-data/film-cards'

const initialState = {
    filmsData: filmCards
};

const toolkitSlice = createSlice({
    name: 'todos/updatefilms',
    initialState: initialState,
    reducers: {
        updateFilmsData(state, action){
            state.filmsData = action.payload
        }
    }
})

export default toolkitSlice.reducer;
export const { updateFilmsData } = toolkitSlice.actions;
