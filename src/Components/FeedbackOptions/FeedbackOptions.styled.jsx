import styled from "@emotion/styled";

export const FeedbackButton = styled.button`
    margin-right: 5px;
    margin-bottom: 30px;
    width: 100px;
    height: 40px;
    font-size: medium;
    font-weight: bold;
    background-color: #ec8065;
    &:hover {
        cursor: pointer;
    }
`
export const FeedbackPannel = styled.div`
    & :first-of-type {
        background-color: #71c64d;
    }

    & :nth-of-type(2) {
        background-color: #d9f16b;
    }
`