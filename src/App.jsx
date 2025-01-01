import React from 'react';
import {Navbar, Projects, Hero} from './components';
import Timeline from './components/Timeline';

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
            <footer>
                <p>Taoreta 2024</p>
                <a href="https://github.com/taoreta-ed">GitHub</a>
            </footer>
        </>
    );
};

export default App;