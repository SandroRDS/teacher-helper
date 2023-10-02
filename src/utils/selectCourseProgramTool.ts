import courseProgram from "../data/coursePrograms";
import { CourseProgramType, ProgramToolType } from "../types";

export default function selectCourseProgramTool(courseProgramName: string, programName: string) {
    const courseProgramSelected = courseProgram.find((courseProgram: CourseProgramType) => {
        return courseProgram.courseProgramName === courseProgramName;
    });

    const programToolSelected = courseProgramSelected?.courseProgramTools.find((programTool: ProgramToolType) => {
        return programTool.programName === programName;
    });

    return programToolSelected;
}
