import styled from "styled-components";

const Nav = () => {
    return (
        <Navigation>
            <Logo>CV <LogoFancy>Builds</LogoFancy></Logo>
        </Navigation>
    );
}

export default Nav;

const Navigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    border-bottom: 1px solid ${props => props.theme.accent};
`;

const Logo = styled.div`
    font-size: 33px;
    font-family: 'Mulish', sans-serif;

    font-weight: 1000;
    font-style: italic;
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.font};
`;

const LogoFancy = styled.span`
    color: ${props => props.theme.accent};
    font-weight: 200;
    font-style: italic;
`;

