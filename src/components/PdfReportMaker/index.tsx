import styled from "styled-components";
import { useState } from "react";
import { Input, } from "@mui/joy";

import GoBack from "../GoBack";
import PageImpress from "../PageImpress";
import FeedbackInputs from "../FeedbackInputs";
import Select from "../Select";
import GoogleIcon from "../GoogleIcon";
import { Textarea } from "@mui/joy";

import { FeedbackType, ReportType } from "../../types";

import extractAllStudentModules from "../../utils/extractAllStudentModules";
import selectCourseProgramNames from "../../utils/selectCourseProgramNames";
import selectCourseProgramToolNames from "../../utils/selectCourseProgramToolNames";

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
    width: 70%;
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

const FeedbackContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
`;

const FeedbackButton = styled.button`
    margin-top: 50px;
    width: 200px;
    height: 50px;
    cursor: pointer;

    border: 2px solid orange;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
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
                category: 'Atividades em sala',
                feedback: '',
                observation: ''
            },
            {
                category: 'Lições e Desafios',
                feedback: '',
                observation: ''
            },
            {
                category: 'Desempenho  Geral',
                feedback: '',
                observation: ''
            },
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
    };

    const addFeedback = () => {
        const copyFormValues = {...formValues};
        copyFormValues.feedbacks.push({
            category: '',
            feedback: '',
            observation: ''
        });

        setFormValues(copyFormValues);
    };

    const removeFeedback = (feedbackIndex: number) => {
        const copyFormValues = {...formValues};
        copyFormValues.feedbacks.splice(feedbackIndex, 1);
        setFormValues(copyFormValues);
    };

    const updateProgramTools = (programTools: string) => {
        const programToolsList = programTools.split(',');
        setFormValues({...formValues, courseProgramTools: programToolsList});
    }

    const moduleList = extractAllStudentModules();
    const toolsList = selectCourseProgramToolNames(formValues.courseProgramName);

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
                            <option value="">--Selecione o módulo--</option>
                            {moduleList.map((moduleName: string, key: number) => {
                                return <option key={key} value={moduleName}>{moduleName}</option>
                            })}
                        </Select>
                        <Textarea
                            onChange={(e) => updateValues('teacherObservation', e.target.value)}
                            placeholder="Observações do Professor"
                            sx={
                                {width: '50%', height: '100px'}
                            }
                        />

                        <FeedbackButton onClick={() => addFeedback()}>
                            <GoogleIcon iconName="add" />
                            Adicionar Feedback
                        </FeedbackButton>
                        <FeedbackContainer>
                            {formValues.feedbacks.map((feedbackObj: FeedbackType, key: number) => {
                                return (
                                    <FeedbackInputs
                                        {...feedbackObj}
                                        updateFeedbacks={
                                            (feedbackType: keyof FeedbackType, value: string) => updateFeedbacks(key, feedbackType, value)
                                        }
                                        removeFeedback={
                                            () => removeFeedback(key)
                                        }
                                    />
                                );
                            })}
                        </FeedbackContainer>
                        <label>Versão do módulo:</label>
                        <Select onChange={(e) => updateValues('courseProgramName', e.target.value)}>
                            <option value="">--Selecione a versão do módulo--</option>
                            {formValues.studentModule && selectCourseProgramNames(formValues.studentModule).map((programName: string) => {
                                return (
                                    <option value={programName}>{programName}</option>
                                );
                            })}
                        </Select>
                        <label>Ferramentas do relatório:</label>
                        <Select onChange={(e) => updateProgramTools(e.target.value)}>
                            <option value="">--Selecione as ferramentas--</option>
                            {toolsList?.length && (<option value={toolsList}>Todas</option>)}
                            {toolsList?.map((toolName: string) => <option value={[toolName]}>{toolName}</option>)}
                        </Select>
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
