import { useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import styled from 'styled-components';

import GoBack from "../GoBack";
import GoogleIcon from "../GoogleIcon";
import ModalAddClass from '../ModalAddClass';
import ClassCard from '../ClassCard';

import { ClassInfosType, ClassType } from '../../types';

const Main = styled.main`
    background-color: #E9E9E9;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 4px;

    background-color: #6ab4fa;
    color: #252525;
    box-shadow: 2px 2px 3px 1px #00000094;

    cursor: pointer;
    transition: all 200ms;

    &:hover {
        background-color: #48af7c;
        color: whitesmoke;
    }
`;

const ClassesContainer = styled.section`
    width: 80%;
    margin-top: 50px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 50px;
    column-gap: 20px;
`;

function AudioReport() {
    const [open, setOpen] = useState(false);
    const [classes, setClasses] = useLocalStorage<ClassType[]>('classes', []);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const updateClasses = (newClass: ClassType) => setClasses([...classes, newClass]);
    const deleteClass = (className: string) => {
        const classesWithoutSelected: ClassType[] = classes.filter(({className: name}: ClassType) => name !== className);
        setClasses(classesWithoutSelected);
    };

    const addClassInfo = (className: string, classInfos: ClassInfosType) => {
        const classSelectIndex = classes.findIndex((classObj: ClassType) => {
            return className === classObj.className;
        });

        const classesCopy = [...classes];
        classesCopy[classSelectIndex].classInfos.push(classInfos);
        setClasses(classesCopy);
    };

    const deleteClassInfo = (className: string, studentName: string) => {
        const classSelectIndex = classes.findIndex((classObj: ClassType) => {
            return className === classObj.className;
        });

        const classesInfosWithoutSelected = classes[classSelectIndex].classInfos.filter((objInfos: ClassInfosType) => {
            return objInfos.studentName !== studentName;
        })

        const classesCopy = [...classes];
        classesCopy[classSelectIndex].classInfos = classesInfosWithoutSelected;
        setClasses(classesCopy);
    };

    return (
        <>
            <GoBack />
            <Main>
                <Button onClick={openModal}>
                    <GoogleIcon iconName="add" />
                </Button>
                <ClassesContainer>
                    {classes.map((objClass: ClassType, index: number) => {
                        return (
                            <ClassCard
                                class={objClass}
                                deleteClass={() => deleteClass(objClass.className)}
                                addClassInfo={(classInfos: ClassInfosType) => addClassInfo(objClass.className, classInfos)}
                                deleteClassInfo={(studentName: string) => deleteClassInfo(objClass.className, studentName)}
                                key={index}
                            />
                        );
                    })}
                </ClassesContainer>
                <ModalAddClass updateClasses={updateClasses} open={open} onClose={closeModal} />
            </Main>
        </>
    );
}

export default AudioReport;
