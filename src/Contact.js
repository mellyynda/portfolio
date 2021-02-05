import styled from 'styled-components';
import { SectionScreen, SectionTitle, titlePadding, colorsObj } from './StyledComp';

const { white, yellow, pink, darkGreen, black } = colorsObj;

const StyledDiv = styled(SectionScreen)`
background: linear-gradient(to left, ${white} 0%, ${white} 50%, ${yellow} 50%, ${yellow} 100%);
h1 {
    transform: translateX(${titlePadding}px);
    border-top: 5px solid ${yellow};    
    span {
        color: ${darkGreen};
    }
}
`

const Contact = () => {
    return (
        <StyledDiv>
                <SectionTitle><span>CON</span><span>TACT<span>.</span></span></SectionTitle>
        </StyledDiv>
    )
}

export default Contact;