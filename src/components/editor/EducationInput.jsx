import { useState } from 'react';
import * as Styled from '../../styles/InputStyles';

import Button from './Button';

import InputField from './InputField';

const EducationInput = ({
    educationValues,
    handleValueUpdate,

    addExperience,
    setExperience,

    submitEducation,
    deleteExperience,
}) => {
    return (
        <Styled.Category>
            <InputField
                label="Institution"
                placeholder="Enter institution"
                value={educationValues.institution}
                onChange={(e) => handleValueUpdate("institution", e.target.value)}
            />

            <InputField
                label="Degree"
                placeholder="Enter degree"
                value={educationValues.degree}
                onChange={(e) => handleValueUpdate("degree", e.target.value)}
            />

            <InputField
                label="Start Year"
                placeholder="Enter start year"
                value={educationValues.start}
                onChange={(e) => handleValueUpdate("start", e.target.value)}
            />

            <InputField
                label="Graduation"
                placeholder="Enter graduation year"
                value={educationValues.graduation}
                onChange={(e) => handleValueUpdate("graduation", e.target.value)}
            />

            <Styled.ButtonContainer>
                <Styled.ButtonWrapper>
                    <Button value="Delete" handleClick={() => deleteExperience("education")} />
                </Styled.ButtonWrapper>

                <Styled.ButtonWrapper>
                    <Button value="Cancel" handleClick={() => setExperience(!addExperience)} />
                    <Button
                        value="Submit"
                        handleClick={() => submitEducation(educationValues)}
                    />
                </Styled.ButtonWrapper>
            </Styled.ButtonContainer>
        </Styled.Category>
    );
}

export default EducationInput;
