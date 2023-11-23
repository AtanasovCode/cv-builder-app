import { useState } from 'react';
import * as Styled from '../../styles/InputStyles';

import Button from './Button';

import InputField from './InputField';

const WorkInput = ({
    workValues,
    handleValueUpdate,

    addExperience,
    setExperience,

    submitWork,
    deleteExperience,
}) => {
    return (
        <Styled.Category>

            <InputField
                label="Position"
                placeholder="Enter position"
                value={workValues.position}
                onChange={(e) => handleValueUpdate("position", e.target.value)}
            />

            <InputField
                label="Company"
                placeholder="Enter company name"
                value={workValues.company}
                onChange={(e) => handleValueUpdate("company", e.target.value)}
            />

            <InputField
                label="Start Year"
                placeholder="Enter start year"
                value={workValues.startYear}
                onChange={(e) => handleValueUpdate("startYear", e.target.value)}
            />

            <InputField
                label="End Year"
                placeholder="Enter end year"
                value={workValues.endYear}
                onChange={(e) => handleValueUpdate("endYear", e.target.value)}
            />

            <InputField
                label="Responsibility"
                placeholder="Enter responsibility"
                value={workValues.responsibility}
                onChange={(e) => handleValueUpdate("responsibility", e.target.value)}
            />


            <Styled.ButtonContainer>
                <Styled.ButtonWrapper>
                    <Button value="Delete" handleClick={() => deleteExperience("workExperience")} />
                </Styled.ButtonWrapper>

                <Styled.ButtonWrapper>
                    <Button value="Cancel" handleClick={() => setExperience(!addExperience)} />
                    <Button
                        value="Submit"
                        handleClick={() => submitWork(workValues)}
                    />
                </Styled.ButtonWrapper>
            </Styled.ButtonContainer>
        </Styled.Category >
    );
}

export default WorkInput;