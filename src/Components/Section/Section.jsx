import { Wrapper, Title } from './Section.styled';
import PropTypes from 'prop-types'


export const Section = ({title, children}) => {
    return (
        <Wrapper><Title>{title}</Title>{children}</Wrapper>
    )
}

Section.propType = {
    title: PropTypes.string,
    children: PropTypes.node,
}
