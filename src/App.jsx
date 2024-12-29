import React from 'react';
import {Navbar, Projects, Hero} from './components';

const App = () => {
    return (
        <div>
            <header>
                <Hero/>
            </header>
            <main>
                <section id="about">
                    <h2>Sobre mí</h2>
                    <p>Soy un estudiante en sistemas computacionales...</p>
                </section>
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
        </div>
    );
};

export default App;