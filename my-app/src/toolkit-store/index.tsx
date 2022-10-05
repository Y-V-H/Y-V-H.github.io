import { combineReducers, configureStore } from '@reduxjs/toolkit'
import toolkitSlice from './slice-reducer';
import sortBySlice from './sort-by-slice-reducer'


const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    sortBy: sortBySlice
})

export const store = configureStore({
    reducer: rootReducer
})