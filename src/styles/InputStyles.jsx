import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Category = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.2rem;
`;


export const Label = styled.label`
    font-size: 16px;
    color: ${props => props.theme.text};
    margin-bottom: .3rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: .5rem;
    font-size: 16px;
    color: ${props => props.theme.text};
    border-radius: 10px; 
    background-color: transparent;
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 6px;
    margin-bottom: 1rem;

    &:focus {
        border: 1px solid ${props => props.theme.primary};
        outline: none;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const ButtonWrapper = styled.div``;