import { FeedbackButton, FeedbackPannel } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <FeedbackPannel>
            <FeedbackButton good type="button" onClick={() => onLeaveFeedback('good')}>Good</FeedbackButton>
            <FeedbackButton neutral type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</FeedbackButton>
            <FeedbackButton bad type="button" onClick={() => onLeaveFeedback('bad')}>Bad</FeedbackButton>
        </FeedbackPannel>
    )
}