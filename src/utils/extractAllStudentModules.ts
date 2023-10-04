import coursePrograms from "../data/coursePrograms" 
import { CourseProgramType } from "../types";

export default function extractAllStudentModules() {
    const modulesList = coursePrograms.map(({ courseProgramModule }: CourseProgramType) => {
        return courseProgramModule;
    });

    return [...new Set(modulesList)];
}