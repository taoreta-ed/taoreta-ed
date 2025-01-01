import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {title : "Proyecto 1", description : "Descripción del proyecto 1", url : "https://www.google.com", date:"Febrero 2022"},
        {title : "Proyecto 2", description : "Descripción del proyecto 2", url : "https://www.google.com", date:"Marzo 2022"},
    ];

    return (
        <section id="projects">
            <h2 className="text-2xl font-bold mb-6">Mis proyectos</h2>
        </section>
    );
};

export default Projects;