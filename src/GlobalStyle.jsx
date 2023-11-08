import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 16px;
        font-family: ${props => props.theme.font};
        min-height: 100vh;
    }
`