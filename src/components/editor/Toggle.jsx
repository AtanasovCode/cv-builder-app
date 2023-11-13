import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Toggle = ({
    currentTheme,
    toggleTheme,
}) => {

    useEffect(() => {
        console.log(currentTheme);
    }, [currentTheme])

    return (
        <Container theme={currentTheme} onClick={toggleTheme}>
            <svg width="70" height="35" viewBox="0 0 70 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="toggle">
                    <g id="Frame 1">
                        <path id="outline" d="M17.5 0.5H52.5C61.8888 0.5 69.5 8.11116 69.5 17.5C69.5 26.8888 61.8888 34.5 52.5 34.5H17.5C8.11116 34.5 0.5 26.8888 0.5 17.5C0.5 8.11116 8.11116 0.5 17.5 0.5Z" stroke="black" />
                        <circle id="ball" cx="51.5" cy="17.5" r="12.5" fill="black" />
                    </g>
                </g>
            </svg>
        </Container>
    );
};

export default Toggle;


// Define styled components for the SVG elements

const Container = styled.div`

    svg {
        cursor: pointer;
        width: 4rem;
        position: relative;
    }

    #ball {
        fill: #000;
        transition: all .4s ease;
    }

    #outline {
        stroke: #000;
        fill: transparent;
        transition: all .4s ease;
    }

    ${props => props.theme === "dark" && `
            #ball {
                position: absolute;
                transform: translateX(-45%);
                fill: #fff;
            }

            #outline {
                stroke: #fff;
                fill: transparent;
            }
        `}
`;