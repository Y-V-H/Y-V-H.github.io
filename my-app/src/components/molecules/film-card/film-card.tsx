import React from 'react';
import { Header } from '../../atoms/headers/header';
import { ButtonInfo } from '../../atoms/button-info/button-info';

type FilmCardProps = {
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
        <figure className={`m-film-card ${className ? className : ''}`}>
            <div className='m-film-card__img-wr'>
                <img className='m-film-card__img' src={require(`/assets/images/cards/${image}`)} />
                <ButtonInfo className='m-film-card__btn-info' />
            </div>
            <figcaption className='m-film-card__caption'>
                <Header size='h3' className='m-film-card__caption-title'>{title}</Header>
                <span className='m-film-card__caption-year'>{year}</span>
                <span className='m-film-card__caption-category'>{category}</span>
            </figcaption>
        </figure>
    )
}