import styled from "styled-components";


import Nav from "./Nav";
import PersonalInput from "./PersonalInput";

const Editor = ({
    cvData,
    updatePersonalInfo,
    updateEducation,
    updateWorkExperience,
}) => {
    return (
        <Container>
            <Nav />

            <InputContainer>
                <PersonalInput
                    cvData={cvData}
                    updatePersonalInfo={updatePersonalInfo}
                    updateEducation={updateEducation}
                    updateWorkExperience={updateWorkExperience}
                />
            </InputContainer>
        </Container>
    )
}

export default Editor;

const Container = styled.div`
    flex: 60%;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem;
`;