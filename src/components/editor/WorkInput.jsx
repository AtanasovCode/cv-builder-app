import { useState } from 'react';
import * as Styled from '../../styles/InputStyles';

import Button from './Button';

import InputField from './InputField';

const WorkInput = ({
    position,
    setPosition,
    company,
    setCompany,
    startYear,
    setStartYear,
    endYear,
    setEndYear,
    responsibility,
    setResponsibility,

    addExperience,
    setExperience,

    submitWork,
}) => {
    return (
        <Styled.Category>

            <InputField
                label="Position"
                placeholder="Enter position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />

            <InputField
                label="Company"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />

            <InputField
                label="Start Year"
                placeholder="Enter start year"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
            />

            <InputField
                label="End Year"
                placeholder="Enter end year"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
            />

            <InputField
                label="Responsibility"
                placeholder="Enter responsibility"
                value={responsibility}
                onChange={(e) => setResponsibility(e.target.value)}
            />


            <Styled.ButtonContainer>
                <Styled.ButtonWrapper>
                    <Button value="Delete" />
                </Styled.ButtonWrapper>

                <Styled.ButtonWrapper>
                    <Button value="Cancel" handleClick={() => setExperience(!addExperience)} />
                    <Button
                        value="Submit"
                        handleClick={() => submitWork(position, company, startYear, endYear, responsibility)}
                    />
                </Styled.ButtonWrapper>
            </Styled.ButtonContainer>
        </Styled.Category >
    );
}

export default WorkInput;