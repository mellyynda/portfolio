import { useState } from 'react';
import styled from 'styled-components';
import { SectionScreen, SectionTitle, colorsObj, HalfScreen } from './StyledComp';
import githubLogo from './img/contact/github-brands.svg';
import canvaLogo from './img/contact/cv.svg';
import inLogo from './img/contact/linkedin-brands.svg';

const { white, yellow, darkGreen } = colorsObj;

const StyledDiv = styled(SectionScreen)`
background: linear-gradient(to left, ${white} 0%, ${white} 50%, ${yellow} 50%, ${yellow} 100%);
margin-bottom: 0;
h1 {
    border-top: 5px solid ${yellow};    
    span {
        color: ${darkGreen};
    }
}
`

const HalfScreenRight = styled(HalfScreen)`
left: 50%;
`

const LinksWrapper = styled(HalfScreen)`
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

const Resume = styled.section`
max-width: 500px;
margin: 0 auto;
`

const HideResume = styled.p`
background: ${yellow};
color: ${white};
font-weight: 600;
text-align: center;
padding: 10px;
margin: 35px;
`

const Contact = () => {

    const [showResume, setShowResume] = useState(false);

    return (<>
        <StyledDiv>
            <HalfScreenRight>
                <SectionTitle><span>CON</span><span>TACT<span>.</span></span></SectionTitle>
            </HalfScreenRight>
            <LinksWrapper>
                <div>
                <p>
                    <a href="https://github.com/mellyynda" target="_blank" rel="noopener"><img src={githubLogo} alt="Go to Github"></img><span>GitHub</span></a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/melindasava/" target="_blank" rel="noopener"><img src={inLogo} alt="Go to LinkedIn"></img><span>LinkedIn</span></a>
                </p>
                <p onClick={() => setShowResume(true)}>
                    <a href="#resume"><img src={canvaLogo} alt="Go to Canva"></img><span>Show Resume</span></a>
                </p>
                </div>
            </LinksWrapper>
        </StyledDiv>
        {showResume ? 
        <Resume id="resume">
            <div  style={{position: "relative", width: "100%",  height: "0", paddingTop: "141.4286%",
            paddingBottom: "48px", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", margin: "1.6em auto 0.9em", overflow: "hidden", borderRadius: "8px", willChange: "transform" }}>
                <iframe style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0", margin: "0" }}
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAESWpf9b9U&#x2F;view?embed">
                </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAESWpf9b9U&#x2F;view?utm_content=DAESWpf9b9U&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Open in new window</a> 
            <HideResume onClick={() => setShowResume(false)}>hide resume △</HideResume>
        </Resume > :
        null }
    </>)
}

export default Contact;