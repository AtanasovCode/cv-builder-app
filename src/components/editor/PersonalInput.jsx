import { useState } from "react";
import styled from "styled-components";

import personalIcon from '../../assets/user.svg';
import Heading from "./Heading";


const PersonalInput = ({
    cvData,
    updatePersonalInfo,
}) => {

    const { fullName, profession, email, phoneNumber } = cvData.personalInfo;

    return (
        <Category>
            <Heading 
                icon={personalIcon}
                text="Personal Information"
            />

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
    margin-bottom: .5rem;
`;


const Label = styled.label`
    font-size: 16px;
    color: ${props => props.theme.text};
    margin-bottom: .3rem;
`;

const Input = styled.input`
    width: 100%;
    padding: .5rem;
    font-size: 16px;
    color: ${props => props.theme.text};
    border-radius: 10px; 
    background-color: transparent;
    border: 1px solid ${props => props.theme.accent};
    margin-bottom: 1rem;

    &:focus {
        border: 1px solid ${props => props.theme.primary};
        outline: none;
    }
`;