// import { FaAngleDoubleDown } from "react-icons/fa";
import Meta from "./Meta";
const Landing = () => {
    const handleScrollDown = () => {
        document.getElementById("section-profile-id").scrollIntoView();
    };
    return (
        <div className="section-home">
            <Meta title="Website" />
            <div className="section-home-name">
                <h2>Hi I'm Hunter</h2>
                <h2>Welcome to my site! </h2>
            </div>
            <button className="icon-down" onClick={handleScrollDown}>
                <i>see more</i>
            </button>
        </div>
    );
};

export default Landing;
