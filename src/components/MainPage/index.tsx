import { Link } from "react-router-dom";
import styled from "styled-components";

import GoogleIcon from '../GoogleIcon';

const Main = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const StyledLink = styled(Link)`
    color: #252525;
    font-weight: 300;
    border-radius: 4px;

    width: 150px;
    padding: 10px;
    border-radius: 6px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &:nth-child(1) {
        background-color: #c54444;
    }

    &:nth-child(2) {
        background-color: #39852f;
    }
`;

function MainPage() {


    return (
        <Main>
            <StyledLink to="/audio-report">
                <GoogleIcon iconName="headphones" />
                <span>Auxiliador de Relatórios de Áudio</span>
            </StyledLink>
            <StyledLink to="/pdf-report-maker">
                <GoogleIcon iconName="article" />
                <span>Criador de Relatórios de Ferramenta</span>
            </StyledLink>
        </Main>
    );
}

export default MainPage;
