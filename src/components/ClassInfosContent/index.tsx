import styled from "styled-components";
import GoogleIcon from "../GoogleIcon";

const Infos = styled.div`
    width: 100%;
    border: 2px solid #78bae6;
    padding: 10px 5px;
    border-bottom-width: 0;

    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &:last-child {
        border-bottom-width: 2px;
    }

    h3 {
        font-size: 1.2em;
        text-align: center;
    }

    p {
        color: green;
    }

    textarea {
        width: 100%;
        min-height: 200px;

        padding: 10px;
        box-shadow: 0 0 4px 1px #1414142f;
        border-radius: 6px;

        resize: none;
        outline: none;

        justify-self: center;
        
        &::-webkit-scrollbar {
            background-color: inherit;
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(22, 22, 22, 0.3);
            border-radius: 12px;
        }
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
    studentSponte: string;
    handleDeleteInfo: () => void;
};

function ClassInfosContent(props: ClassInfosContentProps) {
    const { studentName, studentDescription, studentSponte, handleDeleteInfo } = props;

    return (
        <Infos>
            <h3>{studentName}</h3>
            <p>({`Sponte ${studentSponte}`})</p>
            <textarea>{studentDescription}</textarea>
            <button onClick={handleDeleteInfo}>
                <GoogleIcon iconName="delete" />
            </button>
        </Infos>
    );
}

export default ClassInfosContent;
