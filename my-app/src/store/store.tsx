// import Redux, { createStore  } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './root-reducer';
import getFilmsDataReducer from './feature/getFilmsDataSlice';

// debugger

// const store = Redux.createStore(getFilmsDataReducer);
const store = configureStore({
    reducer: {
      filmsData: getFilmsDataReducer
    }
  })

export default store;
