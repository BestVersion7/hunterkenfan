import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navigation = () => {
    const [showNav, setShowNav] = useState(true);
    const [mobileIcon, setMobileIcon] = useState(true);

    const handleShowNav = () => {
        setMobileIcon(!mobileIcon);
        setShowNav(!showNav);
        window.scrollTo(0, 0);
    };

    const handleClickLink = () => {
        setMobileIcon(!mobileIcon);
        setShowNav(!showNav);
    };

    return (
        <header>
            <nav>
                {mobileIcon ? (
                    <GiHamburgerMenu
                        onClick={handleShowNav}
                        className="navButton"
                    />
                ) : (
                    <AiOutlineClose
                        onClick={handleShowNav}
                        className="navButton"
                    />
                )}
                {showNav ? (
                    <div className="section-link-container-mobile">
                        <Link href="/">
                            <a className="section-nav-links">Home</a>
                        </Link>

                        <Link href="/profile">
                            <a className="section-nav-links">Profile</a>
                        </Link>
                        <Link href="/skill">
                            <a className="section-nav-links">Skill</a>
                        </Link>
                        <Link href="/project">
                            <a className="section-nav-links">Project</a>
                        </Link>
                        <Link href="/blog">
                            <a className="section-nav-links">Blog</a>
                        </Link>
                    </div>
                ) : (
                    <div className="section-link-container-desktop">
                        <div className="section-link-container-blank"></div>
                        <Link href="/">
                            <a
                                onClick={handleClickLink}
                                className="section-nav-links"
                            >
                                Home
                            </a>
                        </Link>

                        <Link href="/profile">
                            <a
                                onClick={handleClickLink}
                                className="section-nav-links"
                            >
                                Profile
                            </a>
                        </Link>
                        <Link href="/skill">
                            <a
                                onClick={handleClickLink}
                                className="section-nav-links"
                            >
                                Skill
                            </a>
                        </Link>
                        <Link href="/project">
                            <a
                                onClick={handleClickLink}
                                className="section-nav-links"
                            >
                                Project
                            </a>
                        </Link>
                        <Link href="/blog">
                            <a
                                onClick={handleClickLink}
                                className="section-nav-links"
                            >
                                Blog
                            </a>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navigation;
