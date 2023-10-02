import styled from "styled-components";
import GoogleIcon from "../GoogleIcon";

const Infos = styled.div`
    width: 100%;
    border: 2px solid #78bae6;
    border-bottom-width: 0;

    background-color: white;

    &:last-child {
        border-bottom-width: 2px;
    }

    h3 {
        font-size: 1.2em;
        text-align: center;
        margin: 10px 0;
    }

    p {
        width: 90%;
        margin: 0 auto;
        text-align: justify;
    }

    button {
        display: block;
        margin: 10px auto;
        background-color: inherit;
    }
`;

type ClassInfosContentProps = {
    studentName: string;
    studentDescription: string;
    handleDeleteInfo: () => void;
};

function ClassInfosContent(props: ClassInfosContentProps) {
    const { studentName, studentDescription, handleDeleteInfo } = props;

    return (
        <Infos>
            <h3>{studentName}</h3>
            <p>{studentDescription}</p>
            <button onClick={handleDeleteInfo}>
                <GoogleIcon iconName="delete" />
            </button>
        </Infos>
    );
}

export default ClassInfosContent;
