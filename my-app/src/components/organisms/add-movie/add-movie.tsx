import React, { useState } from "react";
import { Modal } from "../modal/modal";
import { Button } from "../../atoms/button/button";
import { InputText } from "../../atoms/input-text/input-text";
import { Textarea } from '../../atoms/textarea/textarea';

export const AddMovie = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handlerClick = () => {
        setIsOpen(true)
    };

    return (
        <>
            <div className='o-search-block__add'>
                <div className='o-search-block__logo'><b>netflix</b>roulette</div>
                <Button className='a-btn__primary' onClick={handlerClick}>+ add movie</Button>
            </div>

            <Modal
                isOpen={isOpen}
                titleType="h1"
                title="EDIT MOVIE"
                isModalOpen={setIsOpen}
            >
                <form action="" className="o-add-movie__form">
                    <div className="o-add-movie__form-inputs-wr">
                        <div className="o-add-movie__form-inputs-left-col">
                            <InputText label="TITLE" placeholder="Moana" />
                            <InputText label='movie url' placeholder="https://" />
                            <InputText label='genre' placeholder="select genre" />
                        </div>
                        <div className="o-add-movie__form-inputs-right-col">
                            <InputText label='RELEASE DATE' placeholder="select data" />
                            <InputText onlyNumber label='RATING' placeholder="7.7" />
                            <InputText onlyNumber label='RUNTIME' placeholder="minutes" />
                        </div>
                    </div>
                    <Textarea
                        className="o-add-movie__form"
                        label="OVERVIEW"
                        placeholder="Movie description"
                    />

                    <div className="o-add-movie__form-buttons">
                        <Button className="a-btn__primary" onClick={() => setIsOpen(false)}>reset</Button>
                        <Button className="a-btn__secondary">submit</Button>
                    </div>
                </form>
            </Modal>
        </>
    )
}