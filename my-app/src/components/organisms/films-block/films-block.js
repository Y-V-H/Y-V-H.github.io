import React from 'react';
import { Navigation } from '../../molecules/navigation/navigation';
import { Divider } from '../../atoms/divider/divider';
import { FilmCard } from '../../molecules/film-card/film-card';
import { SortBy } from '../../molecules/sort-by/sort-by';
import { filmCards } from '../../../../assets/mock-data/film-cards.js';

export const FilmsBlock = () => {
    return (
        <main className="container o-films-block">
            <div className="o-films-block__header">
                <Navigation />
                <SortBy />
            </div>
            <Divider className='o-films-block__divider' />
            <div className='o-films-block__search-result'>
                <span><b>39</b> movies found</span>
            </div>
            <div className='o-films-block__list'>
                {
                    filmCards.map(item => <FilmCard
                        key={item.title}
                        className='o-films-block__list-item'
                        title={item.title}
                        year={item.date}
                        category={item.category}
                        image={item.image}
                    />
                    )
                }
            </div>
        </main>
    )
}