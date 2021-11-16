import Profile from "./profile";
import Skill from "./skill";
import Project from "./project";
import Landing from "../components/Landing";

export default function Home() {
    return (
        <div>
            <Landing />
            <Profile />
            <Skill />
            <Project />
        </div>
    );
}
