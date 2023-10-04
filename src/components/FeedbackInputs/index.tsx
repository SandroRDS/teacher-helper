import { FeedbackType } from "../../types";
import { Input, Textarea } from "@mui/joy";

import feedbackTypes from "../../data/feedbackTypes";
import Select from "../Select";
import styled from "styled-components";

type FeedbackInputsType = {
    updateFeedbacks: (key: keyof FeedbackType, value: string) => void;
} & FeedbackType;

const FeedbackContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`;

function FeedbackInputs(props: FeedbackInputsType) {
    const { category, feedback, observation, updateFeedbacks } = props;

    return (
        <FeedbackContainer>
            <Input
                value={category}
                onChange={(e) => updateFeedbacks('category', e.target.value)}
            />
            <Select onChange={(e) => updateFeedbacks('feedback', e.target.value)}>
                {feedbackTypes.map((feedbackType: string, key: number) => (
                    <option key={key} value={feedbackType}>{feedbackType}</option>
                ))}
            </Select>
            <Textarea
                sx={
                    {height:'100px'}
                }
            />
        </FeedbackContainer>
    );
}

export default FeedbackInputs;
