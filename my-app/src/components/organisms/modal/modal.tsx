import { eventNames } from 'process';
import React from 'react';
import { ReactPortal } from '../../../utils/react-portal'
import { Button } from '../../atoms/button/button';
import { Header } from '../../atoms/header/header';

interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    title: string;
    titleType: string;
    isModalOpen: (t: boolean) => void;
}

export const Modal = ({ isOpen, children, title, titleType, isModalOpen, }: ModalProps) => {
    const handlerClick = (event: React.MouseEvent) => {
        isModalOpen(false);
        event.stopPropagation()
    };

    const modalBodyhandlerClick = (event:  React.MouseEvent) => {event.stopPropagation()}

    if (!isOpen) {
        return null;
    }

    return (
        <ReactPortal>
            <div className='o-modal-bg' onClick={handlerClick}>
                <div className='o-modal' onClick={modalBodyhandlerClick}>
                    <Button className='o-modal__close-btn icon icon-cancel' onClick={handlerClick} />
                    <div className=''>
                        <Header size={titleType} className='o-modal__title'>{title}</Header>
                    </div>
                    {children}
                </div>
            </div>
        </ReactPortal>
    )
}