import React, { useState, useEffect } from 'react';
import { ButtonInfo } from '../../atoms/button-info/button-info';
import { Button } from '../../atoms/button/button';
import { Modal } from '../modal/modal';
import { AddMovieModal } from '../add-movie-modal/add-movie-modal';
import { oneFilmData } from '../../../toolkit-store/index';
import { deleteFilmFromState } from '../../../toolkit-store/sort-by-slice-reducer';
import { useDispatch } from 'react-redux';

interface DeleteMovieProps {
    filmId: number;
    className?: string;
    filmsArray: oneFilmData[];
}

export const MovieManipulation = ({ className, filmId, filmsArray }: DeleteMovieProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleted, setDeleted] = useState(false);
    const [isUpdateButtonsShow, setIsUpdateButtonsShow] = useState(false);
    const [isUpdateMovieModalOpen, setIsUpdateMovieModalOpen] = useState(false);
    const [dataForUpdate, setDataForUpdate] = useState(null)

    const dispatch = useDispatch();
    const handlerShowDeleteModal = () => {
        setIsOpen(true);
        handlerShowUpdateButtons();
    }
    const handlerDelete = async () => {
        const stateObjAfterDeleteFilm = filmsArray.filter( obj => obj.id !== filmId);

        await fetch(`http://localhost:4000/movies/${filmId}`, { method: 'DELETE' });
        dispatch(deleteFilmFromState(stateObjAfterDeleteFilm))
        setDeleted(true);
    }
    const handlerShowUpdateButtons = () => setIsUpdateButtonsShow(!isUpdateButtonsShow);
    const handlerShowUpdateFilm = () => {
        setIsUpdateMovieModalOpen(!isUpdateMovieModalOpen);
        handlerShowUpdateButtons();
    }

    useEffect(()=>{
        const defaultMovieDataForUpdate = filmsArray.filter( object => object.id === filmId);
        setDataForUpdate(defaultMovieDataForUpdate[0])
    },[filmId])

    return (
        <>
            <ButtonInfo
                className={className}
                onClick={handlerShowUpdateButtons}
            />

            {isUpdateButtonsShow ? <div className='m-update-film'>
                <Button className='m-update-film__close-btn icon icon-cancel' onClick={handlerShowUpdateButtons} />
                <ul className='m-update-film__list'>
                    <li><Button className='m-update-film__list-btn' onClick={handlerShowDeleteModal}>Delete</Button></li>
                    <li><Button className='m-update-film__list-btn' onClick={handlerShowUpdateFilm}>Update</Button></li>
                </ul>
            </div> : null}

            <Modal
                isOpen={isOpen}
                titleType='h1'
                title='Delete MOVIE'
                toggleModalOpen={setIsOpen}
            >
                <div className='o-delete-movie'>
                    {isDeleted ?
                        <p>The film was deleted successfully</p>
                        : <p>Are you sure you want to delete this movie?</p>
                    }
                    
                    {isDeleted ? null : <Button
                        className='a-btn__secondary o-delete-movie__btn'
                        onClick={handlerDelete}
                    >
                        confirm
                    </Button>}
                </div>
            </Modal>
            
            <AddMovieModal
                isOpen={isUpdateMovieModalOpen}
                toggleModalState={handlerShowUpdateFilm}
                updateObject={dataForUpdate}
            />

        </>
    )
}