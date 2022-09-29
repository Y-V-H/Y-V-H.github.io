import React, { useEffect } from 'react';
import { Navigation } from '../../molecules/navigation/navigation';
import { Divider } from '../../atoms/divider/divider';
import { FilmCard } from '../../molecules/film-card/film-card';
import { SortBy } from '../../molecules/sort-by/sort-by';

import { useDispatch, useSelector  } from 'react-redux';
import { updateFilmsData } from '../../../toolkit-store/slicer-reducer';
import { filmsDataProps } from '../../../toolkit-store/toolkit-reducer';

const selectFilmsData = ( state: filmsDataProps ) => state.toolkit.filmsData;

export const FilmsBlock = () => {
    const dispatch = useDispatch();
    const dataFilms = useSelector(selectFilmsData)

    useEffect(() => {
        fetch('http://localhost:4000/movies')
        .then(( response ) => response.json())
        .then( res => {
            dispatch(updateFilmsData(res.data))
        })
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
                    />
                    )
                }
            </div>
        </main>
    )
}