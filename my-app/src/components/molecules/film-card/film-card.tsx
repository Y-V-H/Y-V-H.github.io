import React from 'react';
import { Header } from '../../atoms/header/header';
import { DeleteMovie } from '../../organisms/delete-movie/delete-movie';
import { clsx } from 'clsx';

interface FilmCardProps {
    title: string;
    year: string;
    category: string;
    image: string;
    className?: string;
}

export const FilmCard = ({
    className,
    title,
    year,
    category,
    image
}: FilmCardProps) => {
    return (
        <figure className={clsx(`m-film-card ${className}`)}>
            <div className='m-film-card__img-wr'>
                <img className='m-film-card__img' src={require(`/assets/images/cards/${image}`)} />
                <DeleteMovie className='m-film-card__btn-info' />
            </div>
            <figcaption className='m-film-card__caption'>
                <Header size='h3' className='m-film-card__caption-title'>{title}</Header>
                <span className='m-film-card__caption-year'>{year}</span>
                <span className='m-film-card__caption-category'>{category}</span>
            </figcaption>
        </figure>
    )
}