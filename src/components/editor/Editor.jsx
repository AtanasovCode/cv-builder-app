import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import { initialCVData, emptyCVData } from "../../data/data";

import styled from "styled-components";


import Nav from "./Nav";
import PersonalInput from "./PersonalInput";
import EducationExperience from "./EducationExperience";
import WorkExperience from "./WorkExperience";
import ColorChange from "./ColorChange";
import LayoutChange from "./LayoutChange";

const Editor = ({
    showEditor,
    toggleTheme,
    currentTheme,
    handleThemeValueChange,
    cvData,
    setCvData,
    setCvLayout,
}) => {

    //values used to display/hide inputs for education experience
    const [addEducationExperience, setAddEducationExperience] = useState(false);
    //values used to display/hide inputs for work experience
    const [addWorkExperience, setAddWorkExperience] = useState(false);

    //used for the ID of the selected experience
    const [selectedID, setSelectedID] = useState("");

    //values used for displaying already added experience
    const [showEducation, setShowEducation] = useState(false);
    const [showWork, setShowWork] = useState(false);

    const clearExample = () => {
        setCvData(emptyCVData)
    };

    const loadExample = () => {
        setCvData(initialCVData);
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

    //creates new object with new education experience
    const submitEducation = (data) => {
        const updatedEducation = {
            id: uuidv4(),
            institution: data.institution,
            degree: data.degree,
            start: data.start,
            graduation: data.graduation
        }

        setCvData((prevCVData) => ({
            ...prevCVData,
            education: [...prevCVData.education, updatedEducation],
        }));

        //close inputs after adding new data
        setAddEducationExperience(!addEducationExperience);
    }

    const updateEducation = (data) => {
        // Identify the index of the selected work experience
        const experienceIndex = cvData.education.findIndex((exp) => exp.id === selectedID);

        // Create a new work experience object with the updated values
        const updatedExperience = {
            id: selectedID,
            institution: data.institution,
            degree: data.degree,
            start: data.start,
            graduation: data.graduation,
        };

        if (experienceIndex !== -1) {
            // If the selectedID is found, update the existing work experience
            const updatedEducationExperience = [...cvData.education];
            updatedEducationExperience[experienceIndex] = updatedExperience;

            // Update cvData with the modified work experience array
            setCvData({ ...cvData, education: updatedEducationExperience });
        }

        //close inputs after updating experience data
        setShowEducation(!showEducation);
    };


    //creates new object with new work experience
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

    const deleteExperience = (experience) => {

        const updatedCvData = { ...cvData };

        const targetArray = updatedCvData[experience];

        if (targetArray) {
            const indexToRemove = targetArray.findIndex((obj) => obj.id === selectedID);

            if (indexToRemove !== -1) {
                targetArray.splice(indexToRemove, 1);
                console.log(`Array with index ${selectedID} has been removed`);

                // Update the state with the modified cvData
                setCvData(updatedCvData);
            } else {
                console.log(`Could not find array with the selected id`);
            }
        } else {
            console.log("Could not find target array");
        }
    }


    return (
        <Container>
            <Nav toggleTheme={toggleTheme} currentTheme={currentTheme} />

            <ExampleButtons>
                <ClearButton
                    type="button"
                    value="Clear Example"
                    onClick={() => clearExample()}
                />

                <LoadButton
                    type="button"
                    value="Load Example"
                    onClick={() => loadExample()}
                />
            </ExampleButtons>

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
                    submitEducation={submitEducation}
                    updateEducation={updateEducation}
                    deleteExperience={deleteExperience}
                    selectedID={selectedID}
                    setSelectedID={setSelectedID}
                    showEducation={showEducation}
                    setShowEducation={setShowEducation}
                    addEducationExperience={addEducationExperience}
                    setAddEducationExperience={setAddEducationExperience}
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
                    deleteExperience={deleteExperience}
                />
            </InputContainer>
        </Container>
    )
}

export default Editor;

const Container = styled.div`
    width: 30%;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    border-right: 1px solid ${props => props.theme.accent};
    transition: background .5s ease;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 2rem;
`;

const ExampleButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 2rem;
`;

const Button = styled.input`
    padding: .5rem 1rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

const LoadButton = styled(Button)`
    background-color: ${props => props.theme.accent};
    color: #fff;
`;

const ClearButton = styled(Button)`
    background-color: transparent;
    border: 1px solid ${props => props.theme.accent};
    color: ${props => props.theme.text};
    margin-right: 1.5rem;
`;