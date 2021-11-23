import { string } from "prop-types";
// import Image from "next/image";

export const ProjectItem = ({
    title,
    url_link,
    url_image,
    description,
    technologiesUsed,
    githubLink,
}) => {
    return (
        <article className="section-projects-web-items">
            <h4>{title}</h4>
            <p>
                <b>Link to Project: </b>
                <a href={url_link} target="_blank" rel="noopener noreferrer">
                    {url_link}
                </a>
            </p>
            <p>
                <b>Link to Code: </b>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    {githubLink}
                </a>
            </p>
            <img
                src={url_image}
                alt={title}
                width="4em"
                height="4em"
                // layout="responsive"
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
