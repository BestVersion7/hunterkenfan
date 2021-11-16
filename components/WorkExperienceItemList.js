import { WorkExperienceItem } from "./WorkExperienceItem";
import { workExperience } from "./data/workExperience";

const WorkExperienceItemList = () => {
    return (
        <div className="section-profile">
            <div className="section-work-container">
                {workExperience.map(
                    ({ Company, Position, Date, Summary }, i) => {
                        return (
                            <WorkExperienceItem
                                key={i}
                                company={Company}
                                position={Position}
                                date={Date}
                                summary={Summary}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default WorkExperienceItemList;
