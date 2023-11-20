import { useState } from 'react';
import * as Styled from '../../styles/InputStyles';

import Heading from './Heading';
import WorkInput from './WorkInput';

import workIcon from '../../assets/work.svg';

const WorkExperience = ({
    cvData,
    currentTheme,
    addWorkExperience,
    setAddWorkExperience,
    submitWork,
}) => {

    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [responsibility, setResponsibility] = useState("");


    return (
        <Styled.ExperienceContainer>
            <Heading
                icon={workIcon}
                text={"Work Experience"}
                currentTheme={currentTheme}
                addExperience={addWorkExperience}
                setExperience={setAddWorkExperience}
            />

            <Styled.AddedExperienceContainer>
                {
                    cvData.workExperience &&
                    cvData.workExperience.map((data) => {
                        return (
                            <Styled.AddedExperienceContainer>
                                <Styled.Experience>
                                    {data.company}
                                </Styled.Experience>
                            </Styled.AddedExperienceContainer>
                        );
                    })
                }
            </Styled.AddedExperienceContainer>

            {
                addWorkExperience &&
                <WorkInput
                    position={position}
                    setPosition={setPosition}

                    company={company}
                    setCompany={setCompany}

                    startYear={startYear}
                    setStartYear={setStartYear}

                    endYear={endYear}
                    setEndYear={setEndYear}

                    responsibility={responsibility}
                    setResponsibility={setResponsibility}

                    setExperience={setAddWorkExperience}
                    addExperience={addWorkExperience}

                    submitWork={submitWork}
                />
            }
        </Styled.ExperienceContainer>
    );
}

export default WorkExperience;