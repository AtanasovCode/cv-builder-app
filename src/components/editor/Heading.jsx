import styled from "styled-components";

import add from '../../assets/add.svg';

const Heading = ({
    icon,
    text,
    currentTheme,
    addExperience,
    handleAddExperience,
}) => {

    return (
        <Container>
            <HeadingInfo>
                <CategoryIcon
                    src={icon}
                    theme={currentTheme}
                />
                <Title>{text}</Title>
            </HeadingInfo>
            {
                text === "Education" || text === "Work Experience" ?
                    <AddIcon
                        src={add} alt="add icon"
                        theme={currentTheme}
                        $active={addExperience}
                        onClick={() => {
                            !addExperience && handleAddExperience()
                        }} 
                    />
                    : <></>
            }
        </Container>
    );
}

export default Heading;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const HeadingInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-left: 1rem;
`;

const CategoryIcon = styled.img`
    width: 2rem;
    ${props => props.theme === "dark" && `
        filter: invert(100%);
    `}
`;

const AddIcon = styled.img`
    width: 2rem;
    cursor: pointer;

    ${props => props.theme === "light" && `
        filter: invert(100%);
    `}

    ${props => props.$active === true && `
        cursor: not-allowed;
        opacity: .4;
    `}
`;
