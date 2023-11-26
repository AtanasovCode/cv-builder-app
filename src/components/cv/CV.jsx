import { useRef } from "react";
import styled from "styled-components";

import ExperienceDisplay from "./ExperienceDisplay";

//importing icons
import number from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import locationIcon from '../../assets/location.svg';

const CV = ({
    cvData,
    cvLayout,
}) => {

    const { fullName, profession, email, phoneNumber, location } = cvData.personalInfo;

    return (
        <Paper
            $layout={cvLayout}
        >
            <PersonalInfoContainer $layout={cvLayout}>
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
                <Location>
                    <Icon src={locationIcon} />
                    {location}
                </Location>
            </PersonalInfoContainer>

            <ExperienceContainer>
                <ExperienceCategory>
                    <ExperienceTitle>
                        Education
                    </ExperienceTitle>

                    {
                        cvData.education.map((data) => {
                            return (
                                <ExperienceDisplay
                                    key={data.id}
                                    start={data.start}
                                    end={data.graduation}
                                    title={data.institution}
                                    subtitle={data.degree}
                                    extra={false}
                                />
                            );
                        })
                    }
                </ExperienceCategory>

                <ExperienceCategory>
                    <ExperienceTitle>
                        Work Experience
                    </ExperienceTitle>

                    {
                        cvData.workExperience.map((data) => {
                            return (
                                <ExperienceDisplay
                                    key={data.id}
                                    start={data.startYear}
                                    end={data.endYear}
                                    title={data.company}
                                    subtitle={data.position}
                                    extra={data.responsibility}
                                />
                            );
                        })
                    }
                </ExperienceCategory>
            </ExperienceContainer>
        </Paper>
    )
}

export default CV;

const Paper = styled.div`
    flex: 70%;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 1.5rem 3rem;

    ${props => props.$layout === "top" && `
        flex-direction: column;
    `}

    ${props => props.$layout === "left" && `
            flex-direction: row;
        `}

    ${props => props.$layout === "right" && `
            flex-direction: row-reverse;
        `}
`;

const PersonalInfoContainer = styled.div`
    background-color: ${props => props.theme.cv};
    color: #fff;
    width: 100%;
    height: auto;
    padding: 2rem;
    transition: background .6s ease;

    ${props => props.$layout === "right" || props.$layout === "left" ? `
        height: 100%;
        width: 40%;
    ` : `height: auto`}
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
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Phone = styled(Mail)``;

const Location = styled(Mail)``;

const Icon = styled.img`
    width: 1.3rem;
    margin-right: .5rem;
`;

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

const ExperienceCategory = styled.div`
    margin-bottom: 4rem;
`;


const ExperienceTitle = styled.div`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 1.25rem;
`;