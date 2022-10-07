import { UPDATE_FILMS_DATA } from '../name-actions';
import { filmCards } from '../../../assets/mock-data/film-cards'

export interface filmsDataProps {
    toolkit: {
        filmsData: {
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
        }[]
    }
}

const initialState = {
    filmsData: filmCards
} ;

export default function getFilmsDataReducer (state = initialState, action: {type: string, payload?: filmsDataProps}){
    switch(action.type){
        case UPDATE_FILMS_DATA: {
            return {
                ...state,
                filmsData: action.payload
            }
        }

        default:
            return state;
    }
}