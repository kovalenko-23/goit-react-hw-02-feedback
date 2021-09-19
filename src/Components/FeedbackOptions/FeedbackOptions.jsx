import PropTypes from 'prop-types'
import { FeedbackButton, FeedbackPannel } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <FeedbackPannel>
            {options.map(option => (<FeedbackButton  key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</FeedbackButton>))}
        </FeedbackPannel>
    )
}

FeedbackOptions.propType = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}