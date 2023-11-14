import { useState } from "react";
import styled from "styled-components";

import Heading from "./Heading";

import layoutIcon from '../../assets/layout.svg';
import topIcon from '../../assets/layout-top.svg';
import leftIcon from '../../assets/layout-left.svg';
import rightIcon from '../../assets/layout-right.svg';


const LayoutChange = ({
    currentTheme,
    setCvLayout,
}) => {

    const [layout, setLayout] = useState([
        {
            icon: leftIcon,
            type: "left"
        },
        {
            icon: topIcon,
            type: "top"
        },
        {
            icon: rightIcon,
            type: "right"
        },
    ])

    return (
        <Container>
            <Heading icon={layoutIcon} text="Layout" currentTheme={currentTheme} />

            <LayoutContainer>
                {
                    layout.map((layout) => {
                        return (
                            <LayoutType
                                key={layout.type}
                                src={layout.icon}
                                alt="layout icon"
                                onClick={() => setCvLayout(layout.type)}
                                theme={currentTheme}
                            />
                        );
                    })
                }
            </LayoutContainer>

        </Container>
    );
}

export default LayoutChange;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

const LayoutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const LayoutType = styled.img`
    width: 2rem;
    cursor: pointer;
    margin-right: 1rem;

    ${props => props.theme === "dark" && `
        filter: invert(100%);
    `}
`;