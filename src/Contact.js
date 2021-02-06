import styled from 'styled-components';
import { SectionScreen, SectionTitle, titlePadding, colorsObj } from './StyledComp';
import githubLogo from './img/contact/github-brands.svg';
import canvaLogo from './img/contact/canva-seeklogo.com.svg';
import inLogo from './img/contact/linkedin-brands.svg';

const { white, yellow, pink, darkGreen, black } = colorsObj;

const StyledDiv = styled(SectionScreen)`
background: linear-gradient(to left, ${white} 0%, ${white} 50%, ${yellow} 50%, ${yellow} 100%);
margin-bottom: 0;
h1 {
    transform: translateX(${titlePadding}px);
    border-top: 5px solid ${yellow};    
    span {
        color: ${darkGreen};
    }
}
`
const LinksWrapper = styled.section`
position: absolute;
top: 0;
left: 0;
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
div p{
    margin-bottom: 45px;
    a{
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
            width: 35px;
            @media (min-width: 508px) {
                //img width goes from 35 to 65 between  screens of 508 and 1900
                width: calc(40px + (65 - 40)*(100vw - 508px)/(1900 - 668));
                max-width: 65;
            }
        }
    }
}
`

const Contact = () => {
    return (
        <StyledDiv>
            <SectionTitle><span>CON</span><span>TACT<span>.</span></span></SectionTitle>
            <LinksWrapper>
                <div>
                <p><a href="https://github.com/mellyynda" target="_blank"><img src={githubLogo} alt="Go to Github"></img><span>GitHub</span></a></p>
                <p><a href="https://www.linkedin.com/in/melindasava/" target="_blank"><img src={inLogo} alt="Go to LinkedIn"></img><span>LinkedIn</span></a></p>
                <p><a href="https://www.canva.com/design/DAESWpf9b9U/oyeK-DdA67DI4MTnIsnoUQ/view?utm_content=DAESWpf9b9U" target="_blank"><img src={canvaLogo} alt="Go to Canva"></img><span>Canva Resume</span></a></p>
                </div>
            </LinksWrapper>
        </StyledDiv>
        
    )
}

export default Contact;