import React, { useContext } from 'react';
import { Header } from '../../atoms/header/header';
import { ButtonIcon } from '../../atoms/button-icon/button-icon';
import { ButtonIconColor, ButtonIconSize } from '../../atoms/button-icon/button-icon';
import { Logo } from '../../atoms/logo/logo';

import { FilmInfoContext } from '../../../filmInfoContext';

interface FilmFullInfo {}

export const FilmFullInfo = ({}:FilmFullInfo) => {
    const { setIsShowFilmInfo, filmFullInfo } = useContext(FilmInfoContext);
    const handlerClickOnLogo = () => setIsShowFilmInfo(false);
    // const { setIsShowFilmInfo, setFilmFullInfo } = useContext(FilmInfoContext);
    console.log(filmFullInfo)
    return (
        <div className="container o-film-info">
            <div className="o-film-info__header">
                <Logo onClick={handlerClickOnLogo}/>
                <ButtonIcon
                    icon='icon-search'
                    color={ButtonIconColor.PRIMARY}
                    buttonSize={ButtonIconSize.MEDIUM}
                />
            </div>
            <div className="o-film-info__wr">
                <div className="o-film-info__img">
                    <img src={require(`/assets/images/cards/${filmFullInfo.image}`)} alt="" />
                </div>
                <div className="o-film-info__details">
                    <div className="o-film-info__details-header">
                        <Header size='h1'>{filmFullInfo.title}</Header>
                        <span className='o-film-info__details-rating'>{filmFullInfo.rating}</span>
                        <span className='o-film-info__details-award'>{filmFullInfo.award}</span>
                    </div>
                    <div className="o-film-info__details-date">
                        <span>{filmFullInfo.year}</span>
                        <span>{filmFullInfo.duration}</span>
                    </div>
                    <div className="o-film-info__details-description">
                        <p>{filmFullInfo.description}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}