export type ClassInfosType = {
    studentName: string;
    studentDescription: string;
    studentSponte: string;
}

export type ClassType = {
    className: string;
    classInfos: ClassInfosType[];
};

export type ProgramToolType = {
    programName: string,
    numberOfClasses: number,
    description: string,
};

export type CourseProgramType = {
    courseProgramModule: string,
    courseProgramName: string,
    courseProgramTools: ProgramToolType[],
};

export type FeedbackType = {
    category: string;
    feedback: string;
    observation: string;
}

export type ReportType = {
    studentName: string;
    studentModule: string;
    teacherObservation: string;
    feedbacks: FeedbackType[];
    courseProgramName: string;
    courseProgramTools: string[];
};
