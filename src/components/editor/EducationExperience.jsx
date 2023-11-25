import { useState } from 'react';
import * as Styled from '../../styles/InputStyles';

import Heading from './Heading';
import EducationInput from './EducationInput';

import expandIcon from '../../assets/expand.svg';
import educationIcon from '../../assets/education.svg';

const EducationExperience = ({
    cvData,
    currentTheme,
    addEducationExperience,
    setAddEducationExperience,
    submitEducation,
    updateEducation,
    showEducation,
    setShowEducation,
    selectedID,
    setSelectedID,
    deleteExperience,
}) => {

    const [educationValues, setEducationValues] = useState({
        institution: "",
        degree: "",
        start: "",
        graduation: ""
    })

    const handleValueUpdate = (field, value) => {
        setEducationValues({
            ...educationValues,
            [field]: value
        })
    }

    const setSelectedExperience = (data) => {
        setEducationValues({
            ...educationValues,
            institution: data.institution,
            degree: data.degree,
            start: data.start,
            graduation: data.graduation
        })
    };

    const clearEducationValues = () => {
        setEducationValues({
            institution: "",
            degree: "",
            start: "",
            graduation: ""
        })
    }

    return (
        <Styled.ExperienceContainer>
            <Heading
                icon={educationIcon}
                text={"Education"}
                currentTheme={currentTheme}
                addExperience={addEducationExperience}
                setExperience={setAddEducationExperience}
                clearValues={clearEducationValues}
            />

            <Styled.AddedExperienceContainer>
                {
                    cvData.education &&
                    cvData.education.map((data) => {
                        return (
                            <Styled.AddedExperienceContainer key={data.id}>
                                <Styled.ExperienceWrapper>
                                    <Styled.Experience
                                        onClick={() => {
                                            setSelectedID(data.id)
                                            setShowEducation(!showEducation);
                                            setSelectedExperience(data);
                                        }}
                                    >
                                        <Styled.ExperienceName>
                                            {data.institution}
                                        </Styled.ExperienceName>

                                        <Styled.ExpandIcon
                                            src={expandIcon}
                                            alt="expand icon"
                                            theme={currentTheme}
                                        />
                                    </Styled.Experience>

                                    {
                                        showEducation && data.id === selectedID && (
                                            <Styled.InputContainer>
                                                <EducationInput
                                                    educationValues={educationValues}
                                                    setExperience={setShowEducation}
                                                    addExperience={showEducation}
                                                    submitEducation={updateEducation}
                                                    deleteExperience={deleteExperience}
                                                    handleValueUpdate={handleValueUpdate}
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
                addEducationExperience &&
                <EducationInput
                    educationValues={educationValues}
                    handleValueUpdate={handleValueUpdate}
                    setExperience={setAddEducationExperience}
                    addExperience={addEducationExperience}
                    submitEducation={submitEducation}
                />
            }
        </Styled.ExperienceContainer>
    );
}

export default EducationExperience;
