import React, { useState } from 'react';
import { ButtonInfo } from '../../atoms/button-info/button-info';
import { Button } from '../../atoms/button/button';
import { Modal } from '../modal/modal';

interface DeleteMovieProps {
    className?: string;
}

export const DeleteMovie = ({ className }: DeleteMovieProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);

    return (
        <>
            <ButtonInfo
                className={className}
                onClick={handleClick}
            />

            {isOpen && <Modal
                titleType='h1'
                title='Delete MOVIE'
                isModalOpen={setIsOpen}
            >
                <div className='o-delete-movie'>
                    <p>Are you sure you want to delete this movie?</p>
                    <Button className='a-btn__secondary o-delete-movie__btn '>confirm</Button>
                </div>
            </Modal>}
        </>
    )
}