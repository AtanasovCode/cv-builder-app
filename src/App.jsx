import { useState } from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

//importing components
import Editor from './components/editor/Editor';
import CV from './components/CV/CV';

function App() {

  const [theme, setTheme] = useState({
    // text: '#fef9ec',
    // background: '#050a09',
    // primary: '#a801c6',
    // secondary: '#2e4700',
    // accent: '#38fe16',

    // text: "#fbfdfe",
    // background: "#061a28",
    // primary: "#1c2cba",
    // secondary: "#0d041b",
    // accent: "#641ecc",

    text: "#1a1919",
    background: "#ffffff",
    primary: "#273cff",
    secondary: "#2a006d",
    accent: "#893aff",


    //used for top part of CV
    cv: "#007BFF",

    font: 'Lato',
  });

  //Personal information
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: "Sheldon Lee Cooper",
      profession: "Theoretical Physicist",
      email: "sheldon.cooper@caltech.edu",
      phoneNumber: "+1 (555) 987-6543",
      location: "Pasedina, California",
    },
    education: [
      {
        institution: "California Institute of Technology (Caltech)",
        degree: "Ph.D. in Theoretical Physics",
        start: 2000,
        graduation: 2003,
      },
    ],
    workExperience: [
      {
        position: "Senior Theoretical Physicist",
        company: "Caltech",
        startYear: "2003",
        endYear: "Present",
        responsibilities: "Conducting groundbreaking research in theoretical physics",
      },
      // Add more work experience entries as needed
    ],
  });

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

  const updateWorkExperience = (index, field, value) => {
    const updatedWorkExperience = [...cvData.workExperience];
    updatedWorkExperience[index] = {
      ...updatedWorkExperience[index],
      [field]: value,
    };
    setCvData({
      ...cvData,
      workExperience: updatedWorkExperience,
    });
  };

  //change theme color
  const handleThemeChange = (field, color) => {
    setTheme({
      ...theme,
      [field]: color
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Editor
          cvData={cvData}
          updatePersonalInfo={updatePersonalInfo}
          updateEducation={updateEducation}
          updateWorkExperience={updateWorkExperience}
          handleThemeChange={handleThemeChange}
        />
        <CV
          cvData={cvData}
        />
      </Container>
    </ThemeProvider>
  )
}

export default App


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #222;
`;