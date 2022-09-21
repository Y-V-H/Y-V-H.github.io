import React, { useContext } from 'react';
import { Header } from '../../atoms/header/header';
import { DeleteMovie } from '../../organisms/delete-movie/delete-movie';
import { clsx } from 'clsx';

import { FilmInfoContext } from '../../../filmInfoContext';
import { filmCards } from '../../../../assets/mock-data/film-cards.js';

interface FilmCardProps {
    title: string;
    year: string;
    category: string[];
    image: string;
    id: number;
    className?: string;
}

export const FilmCard = ({
    title,
    year,
    category,
    image,
    id,
    className,
}: FilmCardProps) => {
    const { setIsShowFilmInfo, setFilmFullInfo } = useContext(FilmInfoContext);
    const handlerClick = () => {
        setFilmFullInfo(filmCards[id]);
        setIsShowFilmInfo(true);
    };

    return (
        <figure className={clsx(`m-film-card ${className}`)} onClick={handlerClick}>
            <div className='m-film-card__img-wr'>
                <img className='m-film-card__img' src={require(`${image}`)} />
                <DeleteMovie className='m-film-card__btn-info' />
            </div>
            <figcaption className='m-film-card__caption'>
                <Header size='h3' className='m-film-card__caption-title'>{title}</Header>
                <span className='m-film-card__caption-year'>{year}</span>
                <span className='m-film-card__caption-category'>{...category}</span>
            </figcaption>
        </figure>
    )
}