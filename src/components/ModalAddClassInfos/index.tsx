import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Modal } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import Alert from "@mui/material/Alert";

import { ClassInfosType } from "../../types";

const CentralizedModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.form`
    padding: 20px;
    border-radius: 2px;

    background-color: #e4e4e4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Label = styled.label`
    font-size: .9em;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 5px;
`;

const Button = styled.button`
    font-size: .8em;
    width: 120px;
    height: 40px;
    border-radius: 4px;

    border: 2px solid #c54444;
    margin-top: 50px;

    transition: all 200ms;

    cursor: pointer;

    &:hover {
        background-color: #c54444;
        color: whitesmoke;
    }
`;

const Input = styled.input`
    outline: none;
    padding: 5px 10px;
    margin-bottom: 5px;
    font-size: .9em;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 10px;

    resize: none;
    outline: none;
`;

const Select = styled.select`
    width: 100%;
    height: 25px;
    font-size: .8em;
    outline: none;
`;

type ModalAddClassInfosProps = {
    open: boolean;
    onClose: () => void;
    addClassInfos: (classInfos: ClassInfosType) => void;
};

function ModalAddClassInfos(props: ModalAddClassInfosProps) {
    const { open, onClose, addClassInfos } = props;

    const useFormConfig = {
        defaultValues: {
            studentName: '',
            studentDescription: '',
            studentSponte: '',
        }
    };

    const {
        register, 
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm(useFormConfig);

    const onSubmit = () => {
        const classInfos: ClassInfosType = getValues();
        addClassInfos(classInfos);
    }

    return (
        <CentralizedModal open={open} onClose={onClose} onSubmit={handleSubmit(onSubmit)}>
            <ModalContent>
                <Label>Informe o nome do aluno:</Label>
                <Input
                    type="text"
                    {...register('studentName', {
                        required: 'O nome do aluno deve ser informado.'
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name="studentName"
                    render={({ message }) => <Alert severity="error">{message}</Alert>}
                />
                <Label>Disserte o que falará no áudio sobre o aluno:</Label>
                <Textarea
                    {...register('studentDescription', {
                        required: 'Insira o texto que será falado no áudio.'
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name="studentDescription"
                    render={({ message }) => <Alert severity="error">{message}</Alert>}
                />
                <Label>Informe em qual Sponte o aluno se encontra:</Label>
                <Select {...register('studentSponte', {
                    required: 'O Sponte do aluno deve ser informado.',
                })}>
                    <option value="Campos">Sponte Campos</option>
                    <option value="Macaé">Sponte Macaé</option>
                </Select>
                <ErrorMessage
                    errors={errors}
                    name="studentSponte"
                    render={({ message }) => <Alert severity="error">{message}</Alert>}
                />
                <Button type="submit">Adicionar aluno</Button>
            </ModalContent>
        </CentralizedModal>
    );
}

export default ModalAddClassInfos;
