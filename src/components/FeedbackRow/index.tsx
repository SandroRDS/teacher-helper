import { FeedbackType } from "../../types";

function FeedbackRow(props: FeedbackType) {
    const { category, feedback, observation } = props;

    return (
        <tr>
            <td>{category}</td>
            <td>{feedback}</td>
            <td>{observation}</td>
        </tr>
    );
}

export default FeedbackRow;