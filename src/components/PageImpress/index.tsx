import styled from "styled-components";
import { FeedbackType, ProgramToolType, ReportType } from "../../types";

import FeedbackRow from "../FeedbackRow";
import feedbackTypes from "../../data/feedbackTypes";
import selectCourseProgramTool from "../../utils/selectCourseProgramTool";
import ToolCard from "../ToolCard";

const Page = styled.article`
    display: none;

    @media print {
        * {
            font-family: 'Comic Neue';
        }

        display: block;
        border: 1px solid black;

        background-image: url('/src/images/ctrlplaylogo.png');
        background-repeat: no-repeat;
        background-position: 50% 50%;

        height: 29.7cm;
        width: 21cm;
        padding: 1cm 2.54cm;

        display: flex;
        flex-direction: column;

        h1, h2 {
            font-size: 35pt;
            text-align: center;
            color: #db7a0b;
            font-weight: 600;
        }

        h2, h3 {
            font-size: 32pt;
            color: #145999;
            margin-bottom: 8mm;
            font-weight: 600;
        }

        h3 {
            font-size: 20pt;
            color: #3653a3;
        }
    }
`;

const Info = styled.p`
    @media print {
        font-size: 15pt;
        margin: 7mm 0;
    
        span:nth-of-type(1) {
            font-weight: 600;
        }
    }
`;

const FeedbacksTable = styled.table`
    @media print {
        margin: 0 auto;
        border-spacing: 0;
        max-width: 20cm;

        th {
            padding: 3mm 10mm;
            border: .7mm solid #4355a5;
            border-right-width: 0px;
    
            background-color: orange;
            font-weight: 600;
        }
    
        th:first-child {
            border-radius: 3mm 0 0 0;
        }
    
        th:last-child {
            border-radius: 0 3mm 0 0;
            border-right-width: .7mm;
        }

        td {
            background-color: #f5f5f589;
            border: .6mm solid #4355a589;
            padding: 5mm 6mm;
            text-align: center;
            border-bottom-width: 0;
            border-right-width: 0;
            font-size: 13pt;
        }

        td:first-child {
            font-weight: 600;
        }

        td:nth-of-type(2) {
            font-weight: 600;
            color: #0b4abe;
            font-size: 15pt;
        }

        tr:last-child td {
            border-bottom-width: .6mm;
        }

        td:last-child {
            border-right-width: .6mm;
        }
    }
`;

const FeedbackCategories = styled.small`
    margin-top: 2mm;
    
    span {
        font-weight: 600;
    }
`;

function PageImpress(props: ReportType) {
    const {
        studentName, studentModule, teacherObservation,
        feedbacks, courseProgramName, courseProgramTools
    } = props;

    const toolsList = courseProgramTools
        .map((toolName: string) => selectCourseProgramTool(courseProgramName, toolName)) as ProgramToolType[];

    return (
        <>
            <Page>
                <h1>Avaliação do Aluno</h1>
                <Info>
                    <span>Aluno: </span>
                    <span>{studentName}</span>
                </Info>
                <Info>
                    <span>Módulo: </span>
                    <span>{studentModule}</span>
                </Info>
                <Info>
                    <span>Observações do Professor: </span>
                    <span>{teacherObservation}</span>
                </Info>
                <FeedbacksTable>
                    <thead>
                        <tr>
                            <th>Categorias</th>
                            <th>Feedback</th>
                            <th>Observação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((objFeedback: FeedbackType) => <FeedbackRow {...objFeedback} />)}
                    </tbody>
                </FeedbacksTable>
                <FeedbackCategories><span>*Feedback:</span> {feedbackTypes.join(', ')}.</FeedbackCategories>
            </Page>
            <Page>
                <h2>Ementa Curso Ctrl+Play</h2>
                <h3>{courseProgramName}</h3>
                {toolsList.map((toolInfos: ProgramToolType) => {
                    return <ToolCard {...toolInfos} />
                })}
            </Page>
        </>

    );
}

export default PageImpress;
