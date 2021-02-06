import styled from 'styled-components';
import { SectionScreen, SectionTitle, titlePadding, colorsObj } from './StyledComp';
import githubLogo from './img/contact/github-brands.svg';
import canvaLogo from './img/contact/canva-seeklogo.com.svg';
import inLogo from './img/contact/linkedin-brands.svg';

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
    margin-bottom: 35px;
    a{
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
        }
    }
}
div p img:first-child {
 max-width: 30px;
}
`

const Contact = () => {
    return (
        <StyledDiv>
            <SectionTitle><span>CON</span><span>TACT<span>.</span></span></SectionTitle>
            <LinksWrapper>
                <div>
                <p><a href="https://github.com/mellyynda" target="_blank"><img src={githubLogo}></img><span>GitHub</span></a></p>
                <p><a href="https://www.linkedin.com/in/melindasava/" target="_blank"><img src={inLogo}></img><span>LinkedIn</span></a></p>
                <p><a href="https://www.canva.com/design/DAESWpf9b9U/oyeK-DdA67DI4MTnIsnoUQ/view?utm_content=DAESWpf9b9U" target="_blank"><img src={canvaLogo}></img><span>Canva Resume</span></a></p>
                </div>
            </LinksWrapper>
        </StyledDiv>
        
    )
}

export default Contact;