import styled from "styled-components";
import { ProgramToolType } from "../../types";

const Section = styled.section`
    width: 100%;

    h4 {
        margin-top: 20px;
        font-size: 16pt;
        color: #145999;
    }

    p {
        margin-top: 7mm;
        text-align: justify;
        line-height: 7mm;
    }
`;

function ToolCard(props: ProgramToolType) {
    return (
        <Section>
            <h4>{`${props.programName} (${props.numberOfClasses} aulas)`}</h4>
            <p>{props.description}</p>
        </Section>
    );
}

export default ToolCard;
