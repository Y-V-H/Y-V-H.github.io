import React from "react";
import './components/index.scss'
import './components/atoms/buttons/_buttons.scss'

import { SearchBlock } from './components/organisms/search-block/search-block';
import { FilmsBlock } from './components/organisms/films-block/films-block';

import { ErrorBoundary } from './error-boundary/error-boundary';

function App() {
    return (
        <ErrorBoundary>
            <SearchBlock />
            <FilmsBlock />
            <aside></aside>

        </ErrorBoundary>
    )
}

export default App;