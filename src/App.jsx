import { useEffect, useState } from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

//importing components
import Editor from './components/editor/Editor';
import CV from './components/CV/CV';

function App() {

  const [currentTheme, setCurrentTheme] = useState("light");

  //custom light theme
  const [lightTheme, setLightTheme] = useState({
    text: "#1a1919",
    background: "#ffffff",
    primary: "#273cff",
    secondary: "#2a006d",
    accent: "#893aff",


    //used for top part of CV
    cv: "#007BFF",

    font: 'Lato',
  });


  //custom dark theme
  const [darkTheme, setDarkTheme] = useState({
    text: "#fbfdfe",
    background: "#052840",
    primary: "#1f30ca",
    secondary: "#b78bff",
    accent: "#7315fe",

    //used for top part of CV
    cv: "#007BFF",

    font: 'Lato',
  });



  const toggleTheme = () => {
    currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
  }

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
  const handleThemeValueChange = (field, color) => {
    currentTheme === "light" ?
      setLightThene({
        ...lightTheme,
        [field]: color
      })
      :
      setDarkTheme({
        ...darkTheme,
        [field]: color
      })
  };

  useEffect(() => {
    console.log(currentTheme);
  }, [currentTheme])

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme} >
      <Container>
        <GlobalStyle />
        <Editor
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
          cvData={cvData}
          updatePersonalInfo={updatePersonalInfo}
          updateEducation={updateEducation}
          updateWorkExperience={updateWorkExperience}
          handleThemeValueChange={handleThemeValueChange}
        />
        <CV
          cvData={cvData}
        />
      </Container>
    </ThemeProvider >
  )
}

export default App


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #111;
`;