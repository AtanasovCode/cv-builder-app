import { useState } from 'react';
//importing similar styles from PersonalStyled.Input
import * as Styled from './PersonalInput';

import Heading from './Heading';
import educationIcon from '../../assets/education.svg';

const EducationInput = ({
    cvData,
    updateEducation,
}) => {

    const { institution, degree, start, graduation } = cvData.education[0];

    return (
        <Styled.Category>
            <Heading
                icon={educationIcon}
                text={"Education"}
            />

            <Styled.Label>
                Institution Name
            </Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter institution name"
                value={institution}
                onChange={(e) => updateEducation(0, "institution", e.target.value)}
            />

            <Styled.Label>Degree</Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter your degree"
                value={degree}
                onChange={(e) => updateEducation(0, "degree", e.target.value)}
            />

            <Styled.Label>Start Year</Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter the year you started"
                value={start}
                onChange={(e) => updateEducation(0, "start", e.target.value)}
            />

            <Styled.Label>Graduation</Styled.Label>
            <Styled.Input
                type="text"
                placeholder="Enter graduation year"
                value={graduation}
                onChange={(e) => updateEducation(0, "graduation", e.target.value)}
            />

        </Styled.Category>
    );
}

export default EducationInput;