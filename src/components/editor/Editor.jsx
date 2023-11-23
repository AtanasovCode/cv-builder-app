import { useRef, useState } from "react";

import useSmoothScroll from '../hooks/useSmoothScroll';

import { v4 as uuidv4 } from 'uuid';

import styled from "styled-components";


import Nav from "./Nav";
import PersonalInput from "./PersonalInput";
import EducationExperience from "./EducationExperience";
import WorkExperience from "./WorkExperience";
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

    //used for smooth scrolling with custom hook
    const { targetRef, handleScroll } = useSmoothScroll();

    //values used to display/hide inputs for education experience
    const [addEducationExperience, setAddEducationExperience] = useState(false);
    //values used to display/hide inputs for work experience
    const [addWorkExperience, setAddWorkExperience] = useState(false);

    //used for the ID of the selected experience
    const [selectedID, setSelectedID] = useState("");

    //values used for displaying already added experience
    const [showEducation, setShowEducation] = useState(false);
    const [showWork, setShowWork] = useState(false);



    const updatePersonalInfo = (field, value) => {
        setCvData({
            ...cvData,
            personalInfo: {
                ...cvData.personalInfo,
                [field]: value,
            },
        });
    };

    const submitEducation = (institution, degree, start, graduation) => {
        const updatedEducation = {
            id: uuidv4(),
            institution,
            degree,
            start,
            graduation
        }

        setCvData((prevCVData) => ({
            ...prevCVData,
            education: [...prevCVData.education, updatedEducation],
        }));

        //close inputs after adding new data
        handleAddExperience()
    }

    const submitWork = (data) => {
        const updatedWork = {
            id: uuidv4(),
            position: data.position,
            company: data.company,
            startYear: data.startYear,
            endYear: data.endYear,
            responsibility: data.responsibility,
        }

        setCvData((prevCVData) => ({
            ...prevCVData,
            workExperience: [...prevCVData.workExperience, updatedWork],
        }));

        //close inputs after adding new data
        setAddWorkExperience(!addWorkExperience);
    }

    const updateWork = (data) => {
        // Identify the index of the selected work experience
        const experienceIndex = cvData.workExperience.findIndex((exp) => exp.id === selectedID);

        // Create a new work experience object with the updated values
        const updatedExperience = {
            id: selectedID,
            position: data.position,
            company: data.company,
            startYear: data.startYear,
            endYear: data.endYear,
            responsibility: data.responsibility,
        };

        if (experienceIndex !== -1) {
            // If the selectedID is found, update the existing work experience
            const updatedWorkExperience = [...cvData.workExperience];
            updatedWorkExperience[experienceIndex] = updatedExperience;

            // Update cvData with the modified work experience array
            setCvData({ ...cvData, workExperience: updatedWorkExperience });
        } else {
            // If selectedID is not found, add a new work experience
            setCvData({ ...cvData, workExperience: [...cvData.workExperience, updatedExperience] });
        }

        //close inputs after updating experience data
        setShowWork(!showWork);
    };


    return (
        <Container
            onMouseEnter={() => window.addEventListener('wheel', handleScroll)}
            onMouseLeave={() => window.removeEventListener('wheel', handleScroll)}
            ref={targetRef}
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
                    currentTheme={currentTheme}
                    addEducationExperience={addEducationExperience}
                    setAddEducationExperience={setAddEducationExperience}
                    submitEducation={submitEducation}
                    selectedID={selectedID}
                    setSelectedID={setSelectedID}
                />

                <WorkExperience
                    cvData={cvData}
                    currentTheme={currentTheme}
                    addWorkExperience={addWorkExperience}
                    setAddWorkExperience={setAddWorkExperience}
                    submitWork={submitWork}
                    showWork={showWork}
                    setShowWork={setShowWork}
                    selectedID={selectedID}
                    setSelectedID={setSelectedID}
                    updateWork={updateWork}
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