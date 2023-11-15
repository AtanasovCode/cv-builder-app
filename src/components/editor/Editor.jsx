import { useRef, useState } from "react";
import styled from "styled-components";


import Nav from "./Nav";
import PersonalInput from "./PersonalInput";
import EducationExperience from "./EducationExperience";
import ColorChange from "./ColorChange";
import LayoutChange from "./LayoutChange";

const Editor = ({
    toggleTheme,
    currentTheme,
    handleThemeValueChange,
    cvData,
    setCvData,
    setCvLayout,
}) => {

    //values used to display/hide inputs for experience
    const [addExperience, setAddExperience] = useState(false);

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
        const endScrollTop = startScrollTop + delta * 2;

        smoothScroll(startScrollTop, endScrollTop, 300); // 300ms duration
    };

    //function for adding new work/education experience
    const handleAddExperience = () => {
        setAddExperience(!addExperience);
    }

    const updatePersonalInfo = (field, value) => {
        setCvData({
            ...cvData,
            personalInfo: {
                ...cvData.personalInfo,
                [field]: value,
            },
        });
    };

    const updateEducation = (index, field, value) => {
        const updatedEducation = [...cvData.education];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [field]: value,
        };
        setCvData({
            ...cvData,
            education: updatedEducation,
        });
    };

    const submitEducation = (institution, degree, start, graduation) => {
        const updatedEducation = {
            institution: institution,
            degree: degree,
            start: start,
            graduation: graduation,
        }

        setCvData((prevCVData) => ({
            ...prevCVData,
            education: [...prevCVData.education, updatedEducation],
        }));

        //close inputs after adding new data
        handleAddExperience()
    }

    return (
        <Container
            onMouseEnter={() => window.addEventListener('wheel', handleScroll)}
            onMouseLeave={() => window.removeEventListener('wheel', handleScroll)}
            ref={editorRef}
        >
            <Nav toggleTheme={toggleTheme} currentTheme={currentTheme} />

            <InputContainer>

                <LayoutChange currentTheme={currentTheme} setCvLayout={setCvLayout} />

                <ColorChange
                    handleThemeValueChange={handleThemeValueChange}
                    currentTheme={currentTheme}
                />

                <PersonalInput
                    cvData={cvData}
                    updatePersonalInfo={updatePersonalInfo}
                    currentTheme={currentTheme}
                />

                <EducationExperience
                    cvData={cvData}
                    updateEducation={updateEducation}
                    currentTheme={currentTheme}
                    addExperience={addExperience}
                    handleAddExperience={handleAddExperience}
                    submitEducation={submitEducation}
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
    border-right: 1px solid ${props => props.theme.accent};
    transition: background .5s ease;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 2rem;
    overflow: auto;
`;