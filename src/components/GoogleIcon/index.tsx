import styled from "styled-components";

const Span = styled.span`
    cursor: pointer;
`;

function GoogleIcon({ iconName }: { iconName: string }) {
    return <Span className="material-symbols-outlined">{iconName}</Span>
}

export default GoogleIcon;