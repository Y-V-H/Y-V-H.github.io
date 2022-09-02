import React from "react";

import { SearchBlock } from './components/organisms/search-block/search-block';
import { FilmsBlock } from './components/organisms/films-block/films-block';
import './components/index.scss'
// import { ErrorBoundary } from './error-boundary/error-boundary';

function App() {
    return (
        <>
            {/* <ErrorBoundary> */}
            <SearchBlock />
            <FilmsBlock />
            <aside>123</aside>
            {/* </ErrorBoundary> */}
        </>
    )
}

export default App;