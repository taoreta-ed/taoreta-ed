import React from 'react';
import {Navbar, Projects, Hero} from './components';

const App = () => {
    return (
        <>
            <Hero/>

            <main>
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