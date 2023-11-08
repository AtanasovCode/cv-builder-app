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
`;

// const Paper = styled.div`
//     background-color: #fff;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     padding: 1rem;
//     width: 100%;
//     height: 100%;
// `;