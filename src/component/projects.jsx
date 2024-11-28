function Projects( {projects, image, description, repo} ) {
  return (
    <div className="card">
      <img src={image} alt={projects} />
      <h2>{projects}</h2>
      <div className="description">
        <h2>{description}</h2>
        <div className="button">
            <a href={repo} target='BLANK'>More Infos</a>
        </div>
      </div>
    </div>
  );
}
export default Projects;