import { useState } from "react";
import styled from "styled-components";
import * as Styled from '../../styles/InputStyles';


import educationIcon from '../../assets/education.svg';

import EducationInput from './EducationInput';

import Heading from "./Heading";

const EducationExperience = ({
    cvData,
    currentTheme,
    addEducationExperience,
    setAddEducationExperience,
    submitEducation,
}) => {

    

    return (
        <Styled.ExperienceContainer>
            <Heading
                icon={educationIcon}
                text={"Education"}
                currentTheme={currentTheme}
                eddExperience={addEducationExperience}
                setExperience={setAddEducationExperience}
            />

            {
                addEducationExperience &&
                <EducationInput
                    addExperience={addEducationExperience}
                    setExperience={setAddEducationExperience}
                    submitEducation={submitEducation}
                />
            }
        </Styled.ExperienceContainer>
    );
}

export default EducationExperience;
