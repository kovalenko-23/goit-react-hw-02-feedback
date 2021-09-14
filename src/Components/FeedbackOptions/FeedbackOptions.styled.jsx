import styled from "@emotion/styled";

export const FeedbackButton = styled.button`
    margin-right: 5px;
    margin-bottom: 30px;
    width: 100px;
    height: 40px;
    font-size: medium;
    font-weight: bold;
    background-color: ${props => props.good && '#59df83'};
    background-color: ${props => props.neutral && '#d4ec65'};
    background-color: ${props => props.bad && '#ec8065'};
    &:hover {
        cursor: pointer;
    }
`
export const FeedbackPannel = styled.div`

`