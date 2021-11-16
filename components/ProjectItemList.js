import { webProjects } from "./data/projects";
import { ProjectItem } from "./ProjectItem";

const ProjectItemList = () => {
    return (
        <div className="section-projects-web">
            {webProjects.map(
                (
                    {
                        title,
                        url_link,
                        url_image,
                        description,
                        gitHubLink,
                        technologiesUsed,
                    },
                    i
                ) => {
                    return (
                        <ProjectItem
                            key={i}
                            title={title}
                            url_link={url_link}
                            githubLink={gitHubLink}
                            url_image={url_image}
                            description={description}
                            technologiesUsed={technologiesUsed}
                        />
                    );
                }
            )}
        </div>
    );
};

export default ProjectItemList;
