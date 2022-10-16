import React, { useState } from "react";
import { Modal } from "../modal/modal";
import { Button } from "../../atoms/button/button";
import { Logo } from '../../atoms/logo/logo';
// import { AddMovieForm } from "../add-movie-modal/add-movie-form-formik";
import { AddMovieModal } from '../add-movie-modal/add-movie-modal'

export const AddMovie = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handlerClick = () => {
        setIsOpen(true)
    };

    return (
        <>
            <div className='o-search-block__add'>
                <Logo />
                <Button className='a-btn__primary' onClick={handlerClick}>+ add movie</Button>
            </div>

            <AddMovieModal isOpen={isOpen} toggleModalState={setIsOpen}/>
        </>
    )
}