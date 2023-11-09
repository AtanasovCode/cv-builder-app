import { useState } from 'react'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

//importing components
import Nav from './components/Nav';
import Editor from './components/Editor';
import CV from './components/CV';

const theme = {
  text: '#fef9ec',
  background: '#140236',
  primary: '#a801c6',
  secondary: '#2e4700',
  accent: '#38fe16',

  font: 'Lato',
};


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Editor />
        <CV />
      </Container>
    </ThemeProvider>
  )
}

export default App


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.theme.accent};
`;