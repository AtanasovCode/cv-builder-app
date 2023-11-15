import { useState } from "react";
import styled from "styled-components";
import * as Styled from '../../styles/InputStyles';


import educationIcon from '../../assets/education.svg';

import EducationInput from './EducationInput';

import Heading from "./Heading";

const EducationExperience = ({
    cvData,
    updateEducation,
    currentTheme,
    addExperience,
    handleAddExperience,
}) => {
    return (
        <Styled.ExperienceContainer onClick={() => handleAddExperience()}>
            <Heading
                icon={educationIcon}
                text={"Education"}
                currentTheme={currentTheme}
                addExperience={addExperience}
                handleAddExperience={handleAddExperience}
            />

            {
                addExperience &&
                <EducationInput 
                    handleAddExperience={handleAddExperience}
                />
            }
        </Styled.ExperienceContainer>
    );
}

export default EducationExperience;
