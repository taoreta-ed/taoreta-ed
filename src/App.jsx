import React from 'react';
import {Navbar, Projects, Hero} from './components';

const App = () => {
    return (
        <>
            <Hero/>

            <main>
                <section id="projects">
                    <h2>Proyectos</h2>
                    <div>Mis proyectos destacados aparecerán aquí</div>
                </section>

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