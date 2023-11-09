import styled from "styled-components";

import personalIcon from '../assets/user.png';

import Nav from "./Nav";

const Editor = () => {
    return (
        <Container>
            <Nav />

            <InputContainer>
                <Category>
                    <Heading>
                        <CategoryIcon src={personalIcon} />
                        <Title>Personal Information</Title>
                    </Heading>

                    <Label>Full Name</Label>
                    <Input type="text" placeholder="John Doe" />

                    <Label>Profession</Label>
                    <Input type="text" placeholder="Frontend Developer" />

                    <Label>E-Mail</Label>
                    <Input type="text" placeholder="example@mail.com" />

                    <Label>Phone Number</Label>
                    <Input type="text" placeholder="555-555-555" />

                </Category>
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

const Category = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1.5rem 0;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-left: 1rem;
`;

const CategoryIcon = styled.img`
    width: 2rem;
    height: 2rem;
    filter: invert(100%);
`;


const Label = styled.label`
    font-size: 16px;
    color: ${props => props.theme.text};
    margin-bottom: .5rem;
`;

const Input = styled.input`
    width: 100%;
    padding: .5rem;
    font-size: 16px;
    color: ${props => props.theme.text};
    border-radius: 10px; 
    background-color: transparent;
    border: 1px solid ${props => props.theme.accent};
    margin-bottom: 2rem;

    &:focus {
        border: 1px solid ${props => props.theme.primary};
        outline: none;
    }
`;