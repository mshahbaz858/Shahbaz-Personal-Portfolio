import styled from 'styled-components'

const StyledHeading = styled.h1`
    font-family: 'Noto Serif', serif;    
    color: #05364d;
    margin-top: 0px;
    font-size: ${props => (props.Fsize?props.Fsize:'48px')};
    font-weight: 900;
    line-height: 60px;
    margin-bottom: 0px;
`
export default StyledHeading;
