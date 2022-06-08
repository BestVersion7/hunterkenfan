import ProjectItemList from "../components/ProjectItemList";
import { Quote } from "../components/Quote";
import Meta from "../components/Meta";

const ProjectPage = () => {
    return (
        <section className="section-projects">
            <Meta title="Projects" />
            <br /> <h2>Passion Projects: </h2>
            <Quote
                quote="The secret to getting ahead is getting started."
                author="Mark Twain"
            />
            <ProjectItemList /> <br />
            <br />
            <br />
        </section>
    );
};

export default ProjectPage;
