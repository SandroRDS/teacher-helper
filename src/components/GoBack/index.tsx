import styled from 'styled-components';
import { Link } from "react-router-dom";
import GoogleIcon from "../GoogleIcon";

const StyledLink = styled(Link)`
    width: 100px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media print {
        display: none;
    }
`;

function GoBack() {
    return (
        <StyledLink to="/">
            <GoogleIcon iconName="west" />
            <span>Voltar</span>
        </StyledLink>
    );
}

export default GoBack;
