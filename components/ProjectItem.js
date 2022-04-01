import { string } from "prop-types";
import Image from "next/image";

export const ProjectItem = ({ props }) => {
    const {
        title,
        url_link,
        url_image,
        description,
        technologiesUsed,
        gitHubLink,
    } = props;
    return (
        <article className="section-projects-web-items">
            <h2>{title}</h2>
            <p>
                <b>Link to Project: </b>
                <a
                    style={{ wordWrap: "break-word" }}
                    href={url_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {url_link}
                </a>
            </p>
            <p>
                <b>Link to Code: </b>
                <a
                    style={{ wordWrap: "break-word" }}
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {gitHubLink}
                </a>
            </p>
            <Image
                src={url_image}
                alt={title}
                width="100%"
                height="100%"
                layout="responsive"
            />
            <p>
                <b>Technologies Used:</b> {technologiesUsed}
            </p>
            <p>
                <b>Description:</b> {description}
            </p>
        </article>
    );
};

ProjectItem.propTypes = {
    title: string.isRequired,
    url_link: string.isRequired,
    url_image: string.isRequired,
    description: string.isRequired,
    technologiesUsed: string.isRequired,
    githubLink: string.isRequired,
};
