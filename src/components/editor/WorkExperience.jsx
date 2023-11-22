import { useState } from 'react';
import * as Styled from '../../styles/InputStyles';

import Heading from './Heading';
import WorkInput from './WorkInput';


import expandIcon from '../../assets/expand.svg';
import workIcon from '../../assets/work.svg';

const WorkExperience = ({
    cvData,
    currentTheme,
    addWorkExperience,
    setAddWorkExperience,
    submitWork,
    showWork,
    setShowWork,
    selectedID,
    setSelectedID,
    updateWork,
}) => {

    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [responsibility, setResponsibility] = useState("");

    // Function to set values based on the selected experience
    const setSelectedExperience = (data) => {
        setPosition(data.position);
        setCompany(data.company);
        setStartYear(data.startYear);
        setEndYear(data.endYear);
        setResponsibility(data.responsibility);
    };


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
                            <Styled.AddedExperienceContainer key={data.id}>
                                <Styled.ExperienceWrapper>
                                    <Styled.Experience
                                        onClick={() => {
                                            setSelectedID(data.id)
                                            setShowWork(!showWork);
                                            setSelectedExperience(data); // Set values for selected experience
                                        }}
                                    >
                                        {data.company}

                                        <Styled.ExpandIcon
                                            src={expandIcon}
                                            alt="expand icon"
                                            theme={currentTheme}
                                        />
                                    </Styled.Experience>

                                    {
                                        showWork && data.id === selectedID && (
                                            <Styled.InputContainer>
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
                                                    setExperience={setShowWork}
                                                    addExperience={showWork}
                                                    submitWork={updateWork}
                                                />
                                            </Styled.InputContainer>
                                        )
                                    }
                                </Styled.ExperienceWrapper>
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