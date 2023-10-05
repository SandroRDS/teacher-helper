import { FeedbackType } from "../../types";
import { Input, Textarea } from "@mui/joy";

import feedbackTypes from "../../data/feedbackTypes";
import Select from "../Select";
import styled from "styled-components";
import GoogleIcon from "../GoogleIcon";

type FeedbackInputsType = {
    updateFeedbacks: (key: keyof FeedbackType, value: string) => void;
    removeFeedback: () => void;
} & FeedbackType;

const FeedbackContainer = styled.section`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

function FeedbackInputs(props: FeedbackInputsType) {
    const { category, updateFeedbacks, removeFeedback } = props;

    return (
        <FeedbackContainer>
            <Input
                value={category}
                onChange={(e) => updateFeedbacks('category', e.target.value)}
                sx={
                    {width: '100%'}
                }
                placeholder="Categoria do Feedback"
            />
            <Select onChange={(e) => updateFeedbacks('feedback', e.target.value)}>
                <option>--Selecione o feedback--</option>
                {feedbackTypes.map((feedbackType: string, key: number) => (
                    <option key={key} value={feedbackType}>{feedbackType}</option>
                ))}
            </Select>
            <Textarea
                onChange={(e) => updateFeedbacks('observation', e.target.value)}
                placeholder="Observação"
                sx={
                    {height:'100px', width: '100%'}
                }
            />
            <button style={{backgroundColor: 'inherit'}} onClick={removeFeedback}>
                <GoogleIcon iconName="delete" />
            </button>
        </FeedbackContainer>
    );
}

export default FeedbackInputs;
