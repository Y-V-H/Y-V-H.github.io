import { UPDATE_FILMS_DATA } from './name-actions';

type updateFilmsDataProps = Record<string, object[]>

export const updateFilmsData = (data: updateFilmsDataProps) => ( {type: UPDATE_FILMS_DATA, payload: data } )