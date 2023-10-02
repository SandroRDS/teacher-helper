import { ClassType, ClassInfosType } from "../../types";
import styled from "styled-components";

import GoogleIcon from "../GoogleIcon";
import ClassInfosContent from "../ClassInfosContent";
import { useState } from "react";
import ModalAddClassInfos from "../ModalAddClassInfos";

const StyledSection = styled.section`
    width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        width: 100%;
        background-color: #78bae6;
        font-weight: 500;
        text-align: center;
        padding: 5px 0;
    }
`;

type ClassCardProps = {
    class: ClassType;
    deleteClass: () => void;
    addClassInfo: (classInfos: ClassInfosType) => void;
    deleteClassInfo: (studentName: string) => void;
};

function ClassCard(props: ClassCardProps) {
    const [open, setOpen] = useState(false);

    const openModal = () => { setOpen(true) };
    const closeModal = () => { setOpen(false) };

    const { class: {
        className,
        classInfos,
    }, deleteClass, addClassInfo, deleteClassInfo } = props;

    return (
        <StyledSection>
            <div>
                <button onClick={deleteClass}><GoogleIcon iconName="delete" /></button>
                <button onClick={openModal}><GoogleIcon iconName="add" /></button>
            </div>
            <h2>{className}</h2>
            {classInfos.map((objInfos: ClassInfosType, index: number) => {
                return (
                    <ClassInfosContent
                        {...objInfos}
                        key={index}
                        handleDeleteInfo={() => deleteClassInfo(objInfos.studentName)}
                    />
                );
            })}
            <ModalAddClassInfos open={open} onClose={closeModal} addClassInfos={addClassInfo} />
        </StyledSection>
    );
}

export default ClassCard;
