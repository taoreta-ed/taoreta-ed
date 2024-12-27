import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {title : "Proyecto 1", description : "Descripción del proyecto 1", url : "https://www.google.com"},
        {title : "Proyecto 2", description : "Descripción del proyecto 2", url : "https://www.google.com"},
    ];

    return (
        <section id="projects">
            <h2>Mis proyectos</h2>
            {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </section>
    );
};

export default Projects;