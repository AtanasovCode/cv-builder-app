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
    deleteExperience,
}) => {

    const [workValues, setWorkValues] = useState({
        position: "",
        company: "",
        startYear: "",
        endYear: "",
        responsibility: ""
    })

    const handleValueUpdate = (field, value) => {
        setWorkValues({
            ...workValues,
            [field]: value
        })
    }

    // Function to set values based on the selected experience
    const setSelectedExperience = (data) => {
        setWorkValues({
            ...workValues,
            position: data.position,
            company: data.company,
            startYear: data.startYear,
            endYear: data.endYear,
            responsibility: data.responsibility
        })
    };

    const clearWorkValues = () => {
        setWorkValues({
            position: "",
            company: "",
            startYear: "",
            endYear: "",
            responsibility: ""
        })
    }


    return (
        <Styled.ExperienceContainer>
            <Heading
                icon={workIcon}
                text={"Work Experience"}
                currentTheme={currentTheme}
                addExperience={addWorkExperience}
                setExperience={setAddWorkExperience}
                clearValues={clearWorkValues}
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
                                                    workValues={workValues}
                                                    setExperience={setShowWork}
                                                    addExperience={showWork}
                                                    submitWork={updateWork}
                                                    deleteExperience={deleteExperience}
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
                    workValues={workValues}
                    handleValueUpdate={handleValueUpdate}
                    setExperience={setAddWorkExperience}
                    addExperience={addWorkExperience}
                    submitWork={submitWork}
                />
            }
        </Styled.ExperienceContainer>
    );
}

export default WorkExperience;