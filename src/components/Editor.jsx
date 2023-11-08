import styled from "styled-components";

import Nav from "./Nav";

const Editor = () => {
    return (
        <Container>
            <Nav />
        </Container>
    )
}

export default Editor;

const Container = styled.div`
    flex: 60%;
    background-color: ${props => props.theme.background};
    border-radius: 12px;
`;