import styled from "styled-components";

const CV = ({
    cvData,
}) => {

    const { fullName, profession, email, phoneNumber } = cvData.personalInfo;

    return (
        <Paper>
            <Personal>
                <h1>
                    {fullName}
                </h1>
                <h1>
                    {profession}
                </h1>
                <h1>
                    {phoneNumber}
                </h1>
                <h1>
                    {email}
                </h1>
            </Personal>
        </Paper>
    )
}

export default CV;

const Paper = styled.div`
    flex: 100%;
    background-color: ${props => props.theme.text};
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 1.5rem 3rem;
`;

const Personal = styled.div`
    background-color: ${props => props.theme.accent};
    width: 100%;
    padding: 1rem;
`;