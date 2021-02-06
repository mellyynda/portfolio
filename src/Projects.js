import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SectionScreen, SectionTitle } from './StyledComp';
import notes from './img/projects/quire/notes.gif';
import quireMobEd from './img/projects/quire/quire-mobile-editor.png';
import quireMob from './img/projects/quire/quire-mobile.png';
import quirePad from './img/projects/quire/quire-pad.png';
import guest from './img/projects/guestbook/guestbook.gif';
import guestMob from './img/projects/guestbook/guestbook-mobile.png';
import guestWeb from './img/projects/guestbook/guestbook-web.png';
import printMob from './img/projects/printeria/printeria-mobile.png';
import printWeb from './img/projects/printeria/printeria-web.png';
import techDoc from './img/projects/tech/tech-doc.jpg';
import homeWeb from './img/projects/homepage/home-mobile.png';
import homeMob from './img/projects/homepage/home-web.jpg';
import mockupMob from './img/projects/mockups/mockup-mobile.png';
import mockupWeb from './img/projects/mockups/mockup-web.png';
import proto from './img/projects/proto.png';
import scrollIcon from './img/projects/scroll-icon.png';
import Card from './Card';

const projects = [
    {
        name: "quire",
        title: "Quire - Note saving app",
        link: "https://github.com/Viktor-Hultman/quire_notebook_assignment_paperclip",
        description: "It is a browser based program that let's you save notes directly from your computer or mobile device.",
        pics: [notes, quireMobEd, quireMob, quirePad ],
        embedd: null
    },
    {
        name: "guestbook",
        title: "Guestbook ",
        link: "https://github.com/mellyynda/Guestbook",
        description: "It is a project built for KYH Yrkeshögskola - Front End Developer Education Program that allows the user to add participants to specific events directly from his computer or mobile device. ",
        pics: [guest, guestMob, guestWeb ],
        embedd: null
    },
    {
        name: "mockups",
        title: "Mockups",
        link: "https://xd.adobe.com/view/9d825c5d-1e99-44ce-ae25-1bdcfd8fe5ff-c8d1/",
        description: "",
        pics: [ mockupWeb, mockupMob ],
        embedd: null
    },
    // {
    //     name: "prototypes",
    //     title: "Prototypes",
    //     link: "https://www.figma.com/proto/uUnNd6QaqVxiwuiOh5f239/EU-Bikes-Prototype-problem-fix?node-id=1%3A5&scaling=scale-down",
    //     description: "",
    //     pics: [ proto ]
    // },
    {
        name: "prototypes",
        title: "Prototypes",
        link: null,
        description: "",
        pics: [],
        embedd: <div className="embedded-content"><iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FuUnNd6QaqVxiwuiOh5f239%2FEU-Bikes-Prototype-problem-fix%3Fnode-id%3D1%253A5%26scaling%3Dscale-down" allowFullScreen></iframe></div>
    },
    {
        name: "printeria",
        title: "Print website",
        link: "https://github.com/mellyynda/calculatorReloaded",
        description: "Printeria is a mobile first, responsive website of a fictive t-shirt print company.",
        pics: [ printWeb, printMob ],
        embedd: null
    },
    // {
    //     name: "documentation",
    //     title: "Technical documentation",
    //     link: "https://codepen.io/mellyynda/pen/rNNBQZx",
    //     description: "Technical documentation data model.",
    //     pics: [ techDoc ],
    //     embedd: null
    // },
    {
        name: "documentation",
        title: "Technical documentation",
        link: null,
        description: "Technical documentation data model.",
        pics: [ ],
        embedd: <div className="embedded-content"><iframe height="400" style={{width: "100%"}} scrolling="no" title="freeCodeCampTechnicalDocumentation" src="https://codepen.io/mellyynda/embed/rNNBQZx?height=265&theme-id=light&default-tab=html,result" frameBorder="no" loading="lazy" allowTransparency="true" allowFullScreen="true">
        See the Pen <a href='https://codepen.io/mellyynda/pen/rNNBQZx'>freeCodeCampTechnicalDocumentation</a> by mellyynda
        (<a href='https://codepen.io/mellyynda'>@mellyynda</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe></div>
    },
    {
        name: "homepage",
        title: "Personal homepage",
        link: "https://github.com/mellyynda/Presentation-Website",
        description: "Mobile first, fully responsive simple presentation website.",
        pics: [ homeMob, homeWeb ],
        embedd: null
    }
]

const margLeft = window.innerWidth / 4;

const IconScroll = styled.img`
position: absolute;
bottom: 25px;
left: ${margLeft - 32.5}px;
width: 65px;
`

const ProjectsWrapper = styled.div`
 @media screen and (min-width: 1300px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
 }
`


const Projects = () => {
const [removedScroll, setRemovedScroll] = useState(false)

useEffect(() => {
    window.addEventListener("scroll", () => setRemovedScroll(true));
    return () => window.removeEventListener("scroll", () => setRemovedScroll(true));
}, [])
    return (
        <section>
            <SectionScreen>
                <SectionTitle><span>PROJ</span><span>ECTS<span>.</span></span></SectionTitle>
                {removedScroll ? null: <IconScroll src={scrollIcon} />}
            </SectionScreen>
            <ProjectsWrapper>
                {projects.map(project => (<Card pics={project.pics} link={project.link} title={project.title} description={project.description} embedd={project.embedd} key={project.name} />))}
            </ProjectsWrapper>
        </section>
    )
}
export default Projects;