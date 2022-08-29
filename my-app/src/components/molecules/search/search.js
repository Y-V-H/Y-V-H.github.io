import React from 'react';
import { Button } from '../../atoms/buttons/buttons';
import { InputText } from '../../atoms/input-text/inputText';

export const Search = () => {
    return (
        <div className='m-search'>
            <InputText placeholder='What do you want to watch?' className='m-search__input' />
            <Button className='a-btn__secondary'>search</Button>
        </div>
    )
}