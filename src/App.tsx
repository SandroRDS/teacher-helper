import { Routes, Route } from "react-router-dom"

import MainPage from './components/MainPage';
import AudioReport from "./components/AudioReport";
import PdfReportMaker from "./components/PdfReportMaker";

function App() {

  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="audio-report" element={<AudioReport />} />
      <Route path="pdf-report-maker" element={<PdfReportMaker />} />
    </Routes>
  )
}

export default App
