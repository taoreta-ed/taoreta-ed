import IconWithTooltip from "./IconWithTooltip";
import { Html5Plain, Css3Plain, JavascriptOriginal, CPlain, MysqlOriginal, JavaPlain, NodejsPlain, GithubOriginal, PythonPlain} from 'devicons-react';

const Projects = () => {
    const projects = [
        {title : "Proyecto 1", description : "Descripción del proyecto 1", url : "https://www.google.com", date:"Febrero 2022", imgUrl : "https://placehold.co/600x400", technologies : ["HTML", "CSS", "JavaScript"]},
        {title : "Proyecto 2", description : "Descripción del proyecto 2", url : "https://www.google.com", date:"Marzo 2022", imgUrl : "https://placehold.co/600x400", technologies : ["HTML", "CSS", "JavaScript"]},
    ];

    const techIcons = {
        HTML: Html5Plain,
        CSS: Css3Plain,
        JavaScript: JavascriptOriginal,
        C: CPlain,
        MySQL: MysqlOriginal,
        Java: JavaPlain,
        Nodejs: NodejsPlain,
        Python: PythonPlain,
    };

    return (
        <section id="projects" className="py-12 px-4 bg-zinc-950 text-zinc-100">
            <h2 className="text-3xl font-bold mb-10 text-center">Mis proyectos</h2>
            <div className="space-y-12">
                {/*Validacion previa al mapeo*/}
                {projects && projects.length > 0 ? (
                    projects.map((project, index) =>(
                        <div key={index} className="space-y-4">
                            {/*Titulo del proyecto*/}
                            <h3 className="text-2xl text-indigo-400 font-semibold text-center">{project.title}</h3>
                            {/*Imagen del proyecto*/}
                            <div className="flex justify-center">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <img src={project.imgUrl} alt={project.title} className=" h-auto rounded-lg shadow-md object-cover"/>
                                </a>
                            </div>
                            {/*Iconos de tecnologias*/}
                            <div className="flex justify-center gap-4">
                                {project.technologies.map((tech, i) => {
                                    const IconComponent = techIcons[tech];
                                    return <IconWithTooltip key={i} IconComponent={IconComponent} title={tech} size={15}/>
                                })}
                            </div>
                            {/*Descripcion del proyecto*/}
                            <p className="text-center text-lg mt-4">{project.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg">No hay proyectos disponibles.</p>
                )}
                
            </div>
        </section>
    );
};

export default Projects;