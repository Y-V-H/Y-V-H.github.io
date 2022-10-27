import React from 'react';
import { Header } from '../../atoms/header/header';
import { MovieManipulation } from '../../organisms/movie-manipulation/movie_manipulation';
import { clsx } from 'clsx';
import { useDispatch, useSelector  } from 'react-redux';
import { updateCurrentFilmData } from '../../../toolkit-store/sort-by-slice-reducer';
import { filmsDataProps } from '../../../toolkit-store/index';

interface FilmCardProps {
    title: string;
    year: string;
    category: string[];
    image: string;
    id: number;
    filmId: number;
    className?: string;
    highlightWord?: string
}

const selectFilmsData = ( state: filmsDataProps ) => state.sortBySlice.filmsData;

export const FilmCard = ({
    title,
    year,
    category,
    image,
    id,
    className,
    filmId,
    highlightWord
}: FilmCardProps) => {
    const dispatch = useDispatch();
    const getFilmsData = useSelector(selectFilmsData);
    // const categoryFullName = `Dfff <b>1212</b>`;
    const categoryFullName = category.toString().replace(/,/g, ' ');
    // const makeHCategory = (str: string, colorWord: string) => str.replaceAll(colorWord, `<span>${colorWord}</span>`);
    // const highlightsCategory = highlightWord ? : categoryFullName

    const handlerClick = () => {
        dispatch(updateCurrentFilmData(getFilmsData[id]));
    };

    return (
        <figure className={clsx(`m-film-card ${className}`)} onClick={handlerClick}>
            <div className='m-film-card__img-wr'>
                {/* <img className='m-film-card__img' src={require(`${image}`)} /> */}
                <img className='m-film-card__img' src={`${image}`} />
                <MovieManipulation className='m-film-card__btn-info' filmId={filmId} filmsArray={getFilmsData}/>
            </div>
            <figcaption className='m-film-card__caption'>
                <Header size='h3' className='m-film-card__caption-title'>{title}</Header>
                <span className='m-film-card__caption-year'>{year}</span>
                <span className='m-film-card__caption-category'>{categoryFullName}</span>`
            </figcaption>
        </figure>
    )
}