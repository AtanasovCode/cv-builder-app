import { useRef } from "react";
import styled from "styled-components";

import useSmoothScroll from '../hooks/useSmoothScroll';

//importing icons
import number from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import locationIcon from '../../assets/location.svg';

const CV = ({
    cvData,
    cvLayout,
}) => {

    const { fullName, profession, email, phoneNumber, location } = cvData.personalInfo;

    //used for smooth scrolling with custom hook
    const { targetRef, handleScroll } = useSmoothScroll();

    return (
        <Paper
            onMouseEnter={() => window.addEventListener('wheel', handleScroll)}
            onMouseLeave={() => window.removeEventListener('wheel', handleScroll)}
            ref={targetRef}
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
                <Experience>
                    <ExperienceCategory>
                        Education
                    </ExperienceCategory>

                    {
                        cvData.education.map((data) => (
                            <AddedExperience key={data.id}>
                                <YearContainer>
                                    {data.start} - {data.graduation}
                                </YearContainer>
                                <InfoContainer>
                                    <ExperienceName>
                                        {data.institution}
                                    </ExperienceName>
                                    <ExperienceWrapper>
                                        <ExperienceLabel>
                                            Degree:
                                        </ExperienceLabel>
                                        <ExperienceTitle>
                                            {data.degree}
                                        </ExperienceTitle>
                                    </ExperienceWrapper>
                                    <ExperienceWrapper>
                                        <ExperienceLabel>
                                            Start:
                                        </ExperienceLabel>
                                        <ExperienceInfo>
                                            {data.start}
                                        </ExperienceInfo>
                                    </ExperienceWrapper>
                                    <ExperienceWrapper>
                                        <ExperienceLabel>
                                            Graduation:
                                        </ExperienceLabel>
                                        <ExperienceInfo>
                                            {data.graduation}
                                        </ExperienceInfo>
                                    </ExperienceWrapper>
                                </InfoContainer>
                            </AddedExperience>
                        ))
                    }

                </Experience>
            </ExperienceContainer>
        </Paper>
    )
}

export default CV;

const Paper = styled.div`
    height: calc(100vh - 3rem);
    overflow: hidden;
    flex: 100%;
    background-color: #fff;
    color: #000;
    /* margin-left: 1rem; */
    display: flex;
    align-items: center;
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
    height: 100%;
    width: 100%;
    padding: 2rem;
`;

const Experience = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExperienceCategory = styled.div` 
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 1.25rem;
`;

const AddedExperience = styled.div`
    display: flex;
    margin-left: 1rem;
    margin-bottom: 1rem;
`;

const YearContainer = styled.div`
    margin-right: 1.5rem;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExperienceName = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: .5rem;
`;

const ExperienceWrapper = styled.div`
    display: flex;
    margin-bottom: .5rem;
    font-size: 17px;
`;

const ExperienceLabel = styled.div`
    margin-right: .5rem;
`;

const ExperienceInfo = styled.div`
`;

const ExperienceTitle = styled(ExperienceInfo)`
    font-weight: 700;
`;