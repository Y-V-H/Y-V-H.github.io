import React from 'react';
import { Modal } from "../modal/modal";
import { AddMovieForm } from './add-movie-form-formik';

interface AddMovieModalProps {
    isOpen: boolean;
    toggleModalState: any;
    updateObject?: object;
}

export const AddMovieModal = ({isOpen, toggleModalState, updateObject}: AddMovieModalProps) => {

    return (
        <Modal
                isOpen={isOpen}
                titleType="h1"
                title="EDIT MOVIE"
                isModalOpen={toggleModalState}
            >
                <AddMovieForm updateObject={updateObject} toggleModalState={toggleModalState}/>
        </Modal>
    )
}