import { UPDATE_FILMS_DATA } from './name-actions';

interface updateFilmsDataProps {
    type: string;
    payload: object[];
}

export const updateFilmsData = (data: updateFilmsDataProps) => ( {type: UPDATE_FILMS_DATA, payload: data } )