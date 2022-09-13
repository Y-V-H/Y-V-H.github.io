import React, { useState } from "react";

import { SearchBlock } from './components/organisms/search-block/search-block';
import { FilmsBlock } from './components/organisms/films-block/films-block';
import { FilmFullInfo } from './components/organisms/film-full-info/film-full-info';
import './components/index.scss'

import { FilmInfoContext } from './filmInfoContext';

function App() {
    const [isShowFilmInfo, setIsShowFilmInfo] = useState(false);
    const [filmFullInfo, setFilmFullInfo] = useState(null)

    return (
            <FilmInfoContext.Provider value={{isShowFilmInfo, setIsShowFilmInfo, filmFullInfo, setFilmFullInfo}}>
                {isShowFilmInfo ? <FilmFullInfo /> : <SearchBlock />}
                <FilmsBlock />
            </FilmInfoContext.Provider>
    )
}

export default App;