import styled from "styled-components";

const CV = () => {
    return (
        <Paper>
        </Paper>
    )
}

export default CV;

const Paper = styled.div`
    flex: 100%;
    background-color: ${props => props.theme.text};
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 1.5rem 3rem;
`;