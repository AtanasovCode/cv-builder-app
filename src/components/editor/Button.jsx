import styled from "styled-components";

const Button = ({
    value,
    handleClick,
}) => {
    return (
        <InputButton
            type="button"
            value={value}
            $function={value}
            onClick={handleClick}
        />
    );
}

export default Button;

const InputButton = styled.input`
    color: ${props => props.theme.text};
    border: none;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    padding: .5rem .6rem;
    background-color: transparent;
    border: 1px solid ${props => props.theme.accent};

    ${props => props.$function === "Submit" && `
        background-color: ${props.theme.accent};
        margin-left: .7rem;
        color: #fff;
    `};
`;