import React from 'react';
import { Header } from '../../atoms/header/header';
import { DeleteMovie } from '../../organisms/delete-movie/delete-movie';
import { clsx } from 'clsx';
import { useDispatch, useSelector  } from 'react-redux';

import { updateCurrentFilmData, filmsDataProps } from '../../../toolkit-store/slice-reducer';

interface FilmCardProps {
    title: string;
    year: string;
    category: string[];
    image: string;
    id: number;
    className?: string;
}

const selectFilmsData = ( state: filmsDataProps ) => state.toolkit.filmsData;

export const FilmCard = ({
    title,
    year,
    category,
    image,
    id,
    className,
}: FilmCardProps) => {
    const dispatch = useDispatch();
    const getFilmsData = useSelector(selectFilmsData);
    const categoryFullName = category.toString().replace(/,/g, ' ');

    const handlerClick = () => {
        dispatch(updateCurrentFilmData(getFilmsData[id]));
    };

    return (
        <figure className={clsx(`m-film-card ${className}`)} onClick={handlerClick}>
            <div className='m-film-card__img-wr'>
                {/* <img className='m-film-card__img' src={require(`${image}`)} /> */}
                <img className='m-film-card__img' src={`${image}`} />
                <DeleteMovie className='m-film-card__btn-info' />
            </div>
            <figcaption className='m-film-card__caption'>
                <Header size='h3' className='m-film-card__caption-title'>{title}</Header>
                <span className='m-film-card__caption-year'>{year}</span>
                <span className='m-film-card__caption-category'>{categoryFullName}</span>
            </figcaption>
        </figure>
    )
}