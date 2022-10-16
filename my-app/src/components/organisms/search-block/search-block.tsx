import React from 'react';
import { Header } from '../../atoms/header/header';
import { Search } from '../../molecules/search/search';
import { AddMovie } from '../add-movie-header/add-movie-header';

export const SearchBlock = () => {
    return (
        <header className='container o-search-block'>
            <AddMovie />
            <Header size='h1' className='o-search-block__title'>FIND YOUR MOVIE</Header>
            <Search />
        </header>
    )
}