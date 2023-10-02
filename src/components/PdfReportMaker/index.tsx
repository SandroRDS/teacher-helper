import styled from "styled-components";

import GoBack from "../GoBack";
import PageImpress from "../PageImpress";

import { ReportType } from "../../types";

const Main = styled.main`
    @media print {
        display: none;
    }
`;

function PdfReportMaker() {
    const report: ReportType = {
        studentName: 'Ana Carolina Oliveira Batista',
        studentModule: 'CT1',
        teacherObservation: 'A Ana é uma ótima aluna, muito carismática e inteligente.',
        feedbacks: [
            {
                category: 'Atenção e Participação em sala',
                feedback: 'Ótimo',
                observation: 'Tem uma ótima participação de aula, respeita e interage muito bem com os alunos e professores.'
            },
            {
                category: 'Atenção e Participação em sala',
                feedback: 'Ótimo',
                observation: 'Tem uma ótima participação de aula, respeita e interage muito bem com os alunos e professores.'
            },
            {
                category: 'Atenção e Participação em sala',
                feedback: 'Ótimo',
                observation: 'Tem uma ótima participação de aula, respeita e interage muito bem com os alunos e professores.'
            }
        ],
        courseProgramName: 'Control+Kids 1 Online',
        courseProgramTools: ['Scratch', 'Scratch', 'Scratch', 'Scratch', 'Scratch', 'Scratch', 'Scratch'],
    };
    
    return (
        <>
            <GoBack />
            <Main>
                <p>PdfReportMaker Page</p>
            </Main>
            <PageImpress {...report}/>
        </>
    );
}

export default PdfReportMaker;
