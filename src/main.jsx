import React from 'react';

const App = () => {
    return (
        <div>
            <header>
                <nav>
                    <h1>Taoreta</h1>
                    <ul>
                        <li><a href="#about">Sobre mí</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
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
            </main>
            <footer>
                <p>Taoreta 2024</p>
                <a href="https://github.com/taoreta-ed">GitHub</a>
            </footer>
        </div>
    );
};

export default App;