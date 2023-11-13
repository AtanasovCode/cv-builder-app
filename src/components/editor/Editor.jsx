import { useRef } from "react";
import styled from "styled-components";


import Nav from "./Nav";
import PersonalInput from "./PersonalInput";
import EducationInput from "./EducationInput";
import ColorChange from "./ColorChange";

const Editor = ({
    handleThemeChange,
    cvData,
    updatePersonalInfo,
    updateEducation,
    updateWorkExperience,
}) => {

    const editorRef = useRef();
    let animationFrameId;

    const smoothScroll = (start, end, duration) => {
        const startTime = performance.now();
        const animateScroll = (timestamp) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const scrollTop = start + (end - start) * progress;

            editorRef.current.scrollTop = scrollTop;

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animateScroll);
            }
        };

        animateScroll(startTime);
    };

    const handleScroll = (e) => {
        const delta = e.deltaY;
        cancelAnimationFrame(animationFrameId);

        const startScrollTop = editorRef.current.scrollTop;
        const endScrollTop = startScrollTop + delta * 0.65;

        smoothScroll(startScrollTop, endScrollTop, 300); // 300ms duration
    };

    return (
        <Container
            onMouseEnter={() => window.addEventListener('wheel', handleScroll)}
            onMouseLeave={() => window.removeEventListener('wheel', handleScroll)}
            ref={editorRef}
        >
            <Nav />

            <InputContainer>
                <ColorChange handleThemeChange={handleThemeChange} />

                <PersonalInput
                    cvData={cvData}
                    updatePersonalInfo={updatePersonalInfo}
                />

                <EducationInput
                    cvData={cvData}
                    updateEducation={updateEducation}
                />
            </InputContainer>
        </Container>
    )
}

export default Editor;

const Container = styled.div`
    flex: 45%;
    height: 100vh;
    overflow: hidden;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    border-right: 1px solid #33333350;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 2rem;
    overflow: auto;
`;