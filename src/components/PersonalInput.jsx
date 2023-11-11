import { useState } from "react";
import styled from "styled-components";

import personalIcon from '../assets/user.png';


const PersonalInput = ({
    cvData,
    updatePersonalInfo,
}) => {

    const { fullName, profession, email, phoneNumber } = cvData.personalInfo;

    return (
        <Category>
            <Heading>
                <CategoryIcon src={personalIcon} />
                <Title>Personal Information</Title>
            </Heading>

            <Label>Full Name</Label>
            <Input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
            />

            <Label>Profession</Label>
            <Input
                type="text"
                placeholder="Enter your profession"
                value={profession}
                onChange={(e) => updatePersonalInfo("profession", e.target.value)}
            />

            <Label>E-Mail</Label>
            <Input
                type="text"
                placeholder="Enter your e-mail address"
                value={email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
            />

            <Label>Phone Number</Label>
            <Input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => updatePersonalInfo("phoneNumber", e.target.value)}
            />

        </Category>
    );
}

export default PersonalInput;


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