import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Modal } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import Alert from "@mui/material/Alert";

import { ClassType } from "../../types";

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


type ModalAddClassProps = {
    open: boolean;
    onClose: () => void;
    updateClasses: (classes: ClassType) => void;
};

function ModalAddClass(props: ModalAddClassProps) {
    const { open, onClose, updateClasses } = props;

    const useFormConfig = {
        defaultValues: {
            className: '',
        }
    };

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm(useFormConfig);

    const onSubmit = () => {
        const className = getValues('className');
        const newClass: ClassType = {
            className,
            classInfos: [],
        }
        updateClasses(newClass);
    }

    return (
        <CentralizedModal open={open} onClose={onClose}>
            <ModalContent onSubmit={handleSubmit(onSubmit)}>
                <Label>Informe o nome da turma:</Label>
                <Input
                    type="text"
                    {...register('className', {
                        required: 'Informe o nome da turma.'
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name="className"
                    render={({ message }) => <Alert severity="error">{message}</Alert>}
                />
                <Button type="submit">Adicionar turma</Button>
            </ModalContent>
        </CentralizedModal>
    );
}

export default ModalAddClass;
