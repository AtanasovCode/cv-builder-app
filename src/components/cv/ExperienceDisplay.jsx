import styled from 'styled-components';

const ExperienceDisplay = ({
    start,
    end,
    title,
    subtitle,
    extra,
}) => {
    return (
        <Container>
            <Year>
                {start} - {end}
            </Year>

            <Info>
                <Title>
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>

                {
                    extra &&
                    <Subtitle>
                        {extra}
                    </Subtitle>
                }
            </Info>
        </Container>
    );
}

export default ExperienceDisplay;

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 2rem;
`;

const Year = styled.div`
    margin-right: 2rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: .7rem;
`;

const Subtitle = styled.div`
    margin-bottom: 1rem;
    font-size: 17px;
`;