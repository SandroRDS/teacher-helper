import coursePrograms from "../data/coursePrograms";

import { CourseProgramType } from "../types";

function selectCourseProgramNames(courseModule: string) {
    const courseProgramsList = coursePrograms.filter(({ courseProgramModule }: CourseProgramType) => {
        return courseProgramModule === courseModule;
    });

    return courseProgramsList.map(({courseProgramName}) => courseProgramName);
}

export default selectCourseProgramNames;
