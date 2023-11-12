import styled from "styled-components";

//importing icons
import number from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';

const CV = ({
    cvData,
}) => {

    const { fullName, profession, email, phoneNumber } = cvData.personalInfo;

    return (
        <Paper>
            <PersonalInfoContainer>
                <Profession>
                    {profession}
                </Profession>
                <Name>
                    {fullName}
                </Name>
                <Phone>
                    <Icon src={number} />
                    {phoneNumber}
                </Phone>
                <Mail>
                    <Icon src={mail} />
                    {email}
                </Mail>
            </PersonalInfoContainer>
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

const PersonalInfoContainer = styled.div`
    background-color: ${props => props.theme.cv};
    color: #111;
    width: 100%;
    padding: 2rem;
    transition: background .6s ease;
`;

const Profession = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: .5rem;
`;

const Name = styled.div`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const Mail = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: .5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Phone = styled(Mail)``;

const Icon = styled.img`
    width: 1.3rem;
    margin-right: .5rem;
`;