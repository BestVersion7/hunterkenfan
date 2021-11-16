import {
    toolSkills,
    webDevelopmentSkills,
    businessSkills,
} from "./data/skills";
import { SkillItem } from "./SkillItem";

const SkillPage = () => {
    return (
        <div className="section-skills">
            <div className="section-skills-item">
                {businessSkills.map(({ name, star, starFill, starHalf }, i) => {
                    return (
                        <div key={i}>
                            <SkillItem
                                name={name}
                                starFill={starFill}
                                starHalf={starHalf}
                                star={star}
                            />
                        </div>
                    );
                })}
            </div>
            <h3>Web Development</h3>
            <div className="section-skills-item">
                {webDevelopmentSkills.map(
                    ({ name, star, starFill, starHalf }, i) => {
                        return (
                            <div key={i}>
                                <SkillItem
                                    name={name}
                                    starFill={starFill}
                                    starHalf={starHalf}
                                    star={star}
                                />
                            </div>
                        );
                    }
                )}
            </div>
            <h3>Tools</h3>
            <div className="section-skills-item">
                {toolSkills.map(({ name, star, starFill, starHalf }, i) => {
                    return (
                        <SkillItem
                            key={i}
                            name={name}
                            starFill={starFill}
                            starHalf={starHalf}
                            star={star}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SkillPage;
