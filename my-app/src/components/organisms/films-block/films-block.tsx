import React, { useEffect } from 'react';
import { Navigation } from '../../molecules/navigation/navigation';
import { Divider } from '../../atoms/divider/divider';
import { FilmCard } from '../../molecules/film-card/film-card';
import { SortBy } from '../../molecules/sort-by/sort-by';

import { useSelector, useDispatch  } from 'react-redux';
import { getMoviesFetch } from '../../../toolkit-store/sort-by-slice-reducer';
import { filmsDataProps } from '../../../toolkit-store/index';

const selectFilmsData = ( state: filmsDataProps ) => state.sortBySlice.filmsData;

export const FilmsBlock = () => {
    const dataFilms = useSelector(selectFilmsData)
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch( getMoviesFetch() )
    },[]);

    return (
        <main className="container o-films-block">
            <div className="o-films-block__header">
                <Navigation />
                <SortBy />
            </div>
            <Divider className='o-films-block__divider' />
            <div className='o-films-block__search-result'>
                <span><b>{dataFilms.length}</b> movies found</span>
            </div>
            <div className='o-films-block__list'>
                {
                    dataFilms.map((item,id) => <FilmCard
                        key={item.title}
                        className='o-films-block__list-item'
                        title={item.title}
                        year={item.release_date}
                        category={item.genres}
                        image={item.poster_path}
                        id={id}
                        filmId={item.id}
                    />
                    )
                }
            </div>
        </main>
    )
}