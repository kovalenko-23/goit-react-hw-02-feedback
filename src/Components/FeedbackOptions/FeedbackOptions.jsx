import { FeedbackButton, FeedbackPannel } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <FeedbackPannel>
            <FeedbackButton onClick={() => onLeaveFeedback('good')}>Good</FeedbackButton>
            <FeedbackButton onClick={() => onLeaveFeedback('neutral')}>Neutral</FeedbackButton>
            <FeedbackButton onClick={() => onLeaveFeedback('bad')}>Bad</FeedbackButton>
        </FeedbackPannel>
    )
}