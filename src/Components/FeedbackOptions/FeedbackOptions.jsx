import PropTypes from 'prop-types'
import { FeedbackButton, FeedbackPannel } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <FeedbackPannel>
            <FeedbackButton good type="button" onClick={() => onLeaveFeedback('good')}>{options[0]}</FeedbackButton>
            <FeedbackButton neutral type="button" onClick={() => onLeaveFeedback('neutral')}>{options[1]}</FeedbackButton>
            <FeedbackButton type="button" onClick={() => onLeaveFeedback('bad')}>{options[2]}</FeedbackButton>
        </FeedbackPannel>
    )
}

FeedbackOptions.propType = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func.isRequired
}