const ProjectCard = ({title, description, url, imgUrl}) => (
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
);

export default ProjectCard;