import React from 'react';
import {Projects, Hero, Timeline, Footer} from './components';

const App = () => {
    return (
        <>
            <Hero/>
            <main>
                {/* Seccion de timeline */}
                <Timeline/>
                {/* Seccion de proyectos */}
                <Projects/>
            </main>
            <Footer/>
        </>
    );
};

export default App;