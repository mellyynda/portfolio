import styled from 'styled-components';
import { SectionTitle } from './StyledComp';
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

import Card from './Card';
import ProjectsContext from './ProjectsContext';

const projects = [
    {
        name: "quire",
        title: "Quire - Note saving app",
        link: "https://github.com/Viktor-Hultman/quire_notebook_assignment_paperclip",
        description: "It is a browser based program that let's you save notes directly from your computer or mobile device.",
        pics: [notes, quireMobEd, quireMob, quirePad ]
    },
    {
        name: "guestbook",
        title: "Guestbook ",
        link: "https://github.com/mellyynda/Guestbook",
        description: "It is a project built for KYH Yrkeshögskola - Front End Developer Education Program that allows the user to add participants to specific events directly from his computer or mobile device. ",
        pics: [guest, guestMob, guestWeb ]
    },
    {
        name: "mockups",
        title: "Mockups",
        link: "https://xd.adobe.com/view/9d825c5d-1e99-44ce-ae25-1bdcfd8fe5ff-c8d1/",
        description: "",
        pics: [ mockupWeb, mockupMob ]
    },
    {
        name: "prototypes",
        title: "Prototypes",
        link: "https://www.figma.com/proto/uUnNd6QaqVxiwuiOh5f239/EU-Bikes-Prototype-problem-fix?node-id=1%3A5&scaling=scale-down",
        description: "",
        pics: [ proto ]
    },
    {
        name: "printeria",
        title: "Print website",
        link: "https://github.com/mellyynda/calculatorReloaded",
        description: "Printeria is a mobile first, responsive website of a fictive t-shirt print company.",
        pics: [ printWeb, printMob ]
    },
    {
        name: "documentation",
        title: "Technical documentation",
        link: "https://codepen.io/mellyynda/pen/rNNBQZx",
        description: "Technical documentation data model.",
        pics: [ techDoc ]
    },
    {
        name: "homepage",
        title: "Personal homepage",
        link: "https://github.com/mellyynda/Presentation-Website",
        description: "Mobile first, fully responsive simple presentation website.",
        pics: [ homeMob, homeWeb ]
    }
]

console.log('quireMobEd:', projects[0].pics[1].includes('mobile'));
console.log(notes, quireMobEd);

const colorsObj = {
    white: '#FFFFFA',
    yellow: '#E3B505',
    pink: '#D30C7B',
    darkGreen: '#0D5C63',
    black: '#2C1320'
}

const { white, yellow, pink, darkGreen, black } = colorsObj;

const screenWidth = window.innerWidth;
var titlePadding = 25 / 100 * screenWidth;

const SectionScreen = styled.div`
background: linear-gradient(to right, ${white} 0%, ${white} 50%, ${darkGreen} 50%, ${darkGreen} 100%);
height: 100vh;
display: flex;
justify-content: center;
margin-bottom: 90px;
h1{
    transform: translateX(-${titlePadding}px);
    transform-origin: center center;
}
`
const ProjectsWrapper = styled.div`
 @media screen and (min-width: 1300px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
 }
`

const Projects = () => {

    return (
    <ProjectsContext.Provider value={projects}>
        <section>
            <SectionScreen>
                <SectionTitle><span>PROJ</span><span>ECTS<span>.</span></span></SectionTitle>
            </SectionScreen>
            <ProjectsWrapper>
                {projects.map(project => (<Card pics={project.pics} link={project.link} title={project.title} description={project.description} />))}
                {/* <Card pics={projects[0].pics} link={projects[0].link} title={projects[0].title} description={projects[0].description} />
                <Card pics={projects[0].pics} link={projects[0].link} title={projects[0].title} description={projects[0].description} />
                <Card pics={projects[0].pics} link={projects[0].link} title={projects[0].title} description={projects[0].description} /> */}
            </ProjectsWrapper>
        </section>
    </ProjectsContext.Provider>
    )
}
export default Projects;