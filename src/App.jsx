import { useEffect, useState } from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

//importing components
import Editor from './components/editor/Editor';
import CV from './components/cv/CV';

import { initialDarkTheme, initialLightTheme } from './data/themes';
import { initialCVData } from './data/data';

function App() {

  const [showEditor, setShowEditor] = useState(false);

  const [cvData, setCvData] = useState(initialCVData);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [lightTheme, setLightTheme] = useState(initialLightTheme);
  const [darkTheme, setDarkTheme] = useState(initialDarkTheme);

  //used to change the layout of the CV
  const [cvLayout, setCvLayout] = useState("top");


  //change current theme
  const toggleTheme = () => {
    //currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
    setCurrentTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

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

  //change theme color values
  const handleThemeValueChange = (field, color) => {
    currentTheme === "light" ?
      setLightTheme({
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
    console.log(cvData);
  }, [cvData])

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme} >
      <Container>
        <GlobalStyle />
        <Editor
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
          cvData={cvData}
          setCvData={setCvData}
          handleThemeValueChange={handleThemeValueChange}
          setCvLayout={setCvLayout}
        />

        <CV
          showEditor={showEditor}
          setShowEditor={setShowEditor}
          cvData={cvData}
          cvLayout={cvLayout}
        />
      </Container>
    </ThemeProvider >
  )
}

export default App


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #cbcbcb;
`;