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
import Card from './Card';

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

const ProjectsWrapper = styled.div`
 @media screen and (min-width: 1300px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
 }
`

const Projects = () => {

    return (
        <section>
            <SectionScreen>
                <SectionTitle><span>PROJ</span><span>ECTS<span>.</span></span></SectionTitle>
            </SectionScreen>
            <ProjectsWrapper>
                {projects.map(project => (<Card pics={project.pics} link={project.link} title={project.title} description={project.description} key={project.name} />))}
            </ProjectsWrapper>
        </section>
    )
}
export default Projects;