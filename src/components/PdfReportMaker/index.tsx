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
    return (
        <>
            <GoBack />
            <Main>
                <p>PdfReportMaker Page</p>
            </Main>
        </>
    );
}

export default PdfReportMaker;
