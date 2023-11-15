
//importing similar styles for all input components
import * as Styled from '../../styles/InputStyles';

import InputField from './InputField';

import Button from './Button';

import { useState } from 'react';

const EducationInput = ({
    handleAddExperience,
}) => {



    const [institution, setInstitution] = useState();
    const [degree, setDegree] = useState();
    const [start, setStart] = useState();
    const [graduation, setGraduation] = useState();


    return (

        <Styled.Category >

            <InputField
                label="Institution Name"
                placeholder="Emter institution name"
                value={institution}
            />

            <InputField
                label="Degree"
                placeholder="Enter your degree"
                value={degree}
            />

            <InputField
                label="Start Year"
                placeholder="Enter start year"
                value={start}
            />

            <InputField
                label="Graduation"
                placeholder="Enter graduation year"
                value={graduation}
            />

            <Styled.ButtonContainer>
                <Styled.ButtonWrapper>
                    <Button value="Delete" />
                </Styled.ButtonWrapper>

                <Styled.ButtonWrapper>
                    <Button value="Cancel" handleClick={handleAddExperience} />
                    <Button value="Submit" />
                </Styled.ButtonWrapper>
            </Styled.ButtonContainer>

        </Styled.Category >
    );
}

export default EducationInput;