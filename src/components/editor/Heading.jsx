import styled from "styled-components";

const Heading = ({
    icon,
    text
}) => {

    return (
        <Container>
            <CategoryIcon src={icon} />
            <Title>{text}</Title>
        </Container>
    );
}

export default Heading;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-left: 1rem;
`;

const CategoryIcon = styled.img`
    width: 2rem;
`;