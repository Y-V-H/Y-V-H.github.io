import React from 'react';
import { Button } from '../../atoms/buttons/buttons';
import { Header } from '../../atoms/headers/header';
import { Search } from '../../molecules/search/search';

export const SearchBlock = () => {
    return (
        <header className='container o-search-block'>
            <div className='o-search-block__add'>
                <div className='o-search-block__logo'><b>netflix</b>roulette</div>
                <Button className='a-btn__primary '>+ add movie</Button>
            </div>
            <Header size='h1' className="o-search-block__title">FIND YOUR MOVIE</Header>
            <Search />
        </header>
    )
}