import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            Connect with me! <br />
            <a
                href="https://github.com/BestVersion7"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
            >
                <AiFillGithub className="icons" />
            </a>
            <a
                href="https://www.linkedin.com/in/hunterkfan"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
            >
                <AiFillLinkedin className="icons" />
            </a>
            <br />
            2021 - <b>www.hunterkf.com</b>
        </footer>
    );
};

export default Footer;
