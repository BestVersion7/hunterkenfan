import Profile from "./profile";
import Skill from "./skill";
import Project from "./project";
import Landing from "../components/Landing";

export default function Home() {
    return (
        <div>
            <br />
            <Landing />
            <br />
            <Profile /> <br />
            <Skill />
            <br />
            <Project />
            <br />
        </div>
    );
}
