import { combineReducers } from 'redux';

import getFilmsDataReducer from './feature/getFilmsDataSlice';

const rootReducer = combineReducers({
    getFilmsDataReducer
});

export default rootReducer;