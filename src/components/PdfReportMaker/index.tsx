import styled from "styled-components";
import { useState } from "react";
import { Input, } from "@mui/joy";

import GoBack from "../GoBack";
import PageImpress from "../PageImpress";
import FeedbackInputs from "../FeedbackInputs";
import Select from "../Select";

import { FeedbackType, ReportType } from "../../types";

import extractAllStudentModules from "../../utils/extractAllStudentModules";

const Main = styled.main`
    
`;

const Section = styled.section`
    @media print {
        display: none;
    }
`;

const Aside = styled.aside`
    @media print {
        display: block;
    }
`;

const Form = styled.article`
    width: 50%;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 2px 2px 3px 1px #0000006c;
    padding: 20px 15px;

    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
        text-align: center;
        font-size: 1.5em;
        font-weight: 500;
        color: #3978d8;
    }
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: inherit;

    border: 2px solid #3978d8;
    border-radius: 6px;

    cursor: pointer;

    transition: all 200ms;

    &:hover {
        background-color: #3978d8;
        color: white;
    }
`;

function PdfReportMaker() {
    const [formValues, setFormValues] = useState<ReportType>({
        studentName: '',
        studentModule: '',
        teacherObservation: '',
        courseProgramName: '',
        feedbacks: [
            {
                category: 'Atenção e Participação em sala',
                feedback: '',
                observation: ''
            },
            {
                category: 'Atenção e Participação em sala',
                feedback: '',
                observation: ''
            },
            {
                category: 'Atenção e Participação em sala',
                feedback: '',
                observation: ''
            }
        ],
        courseProgramTools: [],
    });

    const updateValues = (name: string, value: string) => {
        setFormValues({...formValues, [name]: value});
    };

    const updateFeedbacks = (feedbackIndex: number, key: keyof FeedbackType, value: string) => {
        const copyFormValues = {...formValues};
        copyFormValues.feedbacks[feedbackIndex][key] = value;
        setFormValues(copyFormValues);
    }

    const moduleList = extractAllStudentModules();

    return (
        <>
            <GoBack />
            <Main>
                <Section>
                    <Form>
                        <h1>Monte seu relatório</h1>
                        <Input
                            variant="outlined"
                            placeholder="Nome do aluno"
                            style={{width: '300px'}}
                            onChange={(e) => updateValues('studentName', e.target.value)}
                            value={formValues.studentName}
                        />

                        <Select
                            onChange={(e) => updateValues('studentModule', e.target.value)}
                        >
                            {moduleList.map((moduleName: string, key: number) => {
                                return <option key={key} value={moduleName}>{moduleName}</option>
                            })}
                        </Select>
                        {formValues.feedbacks.map((feedbackObj: FeedbackType, key: number) => {
                            return (
                                <FeedbackInputs
                                    {...feedbackObj}
                                    updateFeedbacks={
                                        (feedbackType: keyof FeedbackType, value: string) => updateFeedbacks(key, feedbackType, value)
                                    }
                                />
                            );
                        })}
                        <Button onClick={() => window.print()}>Baixar PDF</Button>
                    </Form>
                </Section>
                <Aside>
                    <PageImpress {...formValues} />
                </Aside>
            </Main>
        </>
    );
}

export default PdfReportMaker;
