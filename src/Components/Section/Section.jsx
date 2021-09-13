import { Wrapper } from './Section.styled';

export const Section = ({title, children}) => {
    return (
        <Wrapper>{title}{children}</Wrapper>
    )
}