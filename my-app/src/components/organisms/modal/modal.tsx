import React from 'react';
import { ReactPortal } from '../../../utils/reactPortal'
import { Button } from '../../atoms/button/button';
import { Header } from '../../atoms/header/header';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    titleType: string;
    isModalOpen: (t: boolean) => void;
}

export const Modal = ({ children, title, titleType, isModalOpen, }: ModalProps) => {
    const handlerClick = () => isModalOpen(false);

    return (
        <ReactPortal>
            <div className='o-modal-bg' >
                <div className='o-modal'>
                    <Button className='o-modal__close-btn icon icon-cancel' onClick={handlerClick} />
                    <div className='o-modal__header'>
                        <Header size={titleType} className='o-modal__title'>{title}</Header>
                    </div>
                    {children}
                </div>
            </div>
        </ReactPortal>
    )
}