import coursePrograms from "../data/coursePrograms";
import { CourseProgramType } from "../types";

function selectCourseProgramToolNames(courseName: string) {
    const courseProgramSelected = coursePrograms.find((courseProgramObj: CourseProgramType) => {
        const { courseProgramName } = courseProgramObj;
        return courseProgramName === courseName;
    });

    return courseProgramSelected?.courseProgramTools.map(({programName}) => programName);
}

export default selectCourseProgramToolNames;
