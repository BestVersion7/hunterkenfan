import { webProjects } from "./data/projects";
import { ProjectItem } from "./ProjectItem";

const ProjectItemList = () => {
    return (
        <div className="section-projects-web">
            {webProjects.map((props, i) => {
                return <ProjectItem key={i} props={props} />;
            })}
        </div>
    );
};

export default ProjectItemList;
