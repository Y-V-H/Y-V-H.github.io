import React from 'react';
import { Button } from '../../atoms/button/button';
import { InputText } from '../../atoms/input-text/input-text';

export const Search = () => {
    return (
        <div className='m-search'>
            <InputText placeholder='What do you want to watch?' className='m-search__input' />
            <Button className='a-btn__secondary m-search__btn'>search</Button>
        </div>
    )
}