import { useState } from "react";
import styled from "styled-components";

import Heading from "./Heading";

import colorIcon from '../../assets/color.svg';


const ColorChange = ({
    handleThemeValueChange,
}) => {

    const [colors, setColors] = useState([
        "#004895",  
        "#b32100", 
        "#148400"  
    ]);


    return (
        <Container>
            <Heading
                icon={colorIcon}
                text="Background"
            />

            <ColorContainer>
                {
                    colors.map((color) => {
                        return (
                            <Color key={color} color={color} onClick={() => handleThemeValueChange("cv", color)} />
                        );
                    })
                }
            </ColorContainer>
        </Container>
    );
}

export default ColorChange;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Color = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-right: 1rem;
    cursor: pointer;
`;