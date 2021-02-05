import styled from 'styled-components';
import { SectionTitle } from './StyledComp';
import notes from './img/projects/quire/notes.gif';
import quireMobEd from './img/projects/quire/quire-mobile-editor.png';
import quireMob from './img/projects/quire/quire-mobile.png';
import quirePad from './img/projects/quire/quire-pad.png';
import Card from './Card';
import ProjectsContext from './ProjectsContext';

const projects = [
    {
        name: "quire",
        title: "Quire - Note saving app",
        link: "https://github.com/Viktor-Hultman/quire_notebook_assignment_paperclip",
        description: "Something about this project",
        pics: [notes, quireMobEd, quireMob, quirePad ]
    },
    {
        name: "guestbook",
        pics: null
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
margin-bottom: 30px;
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
                <Card pics={projects[0].pics} link={projects[0].link} title={projects[0].title} description={projects[0].description} />
                <Card pics={projects[0].pics} link={projects[0].link} title={projects[0].title} description={projects[0].description} />
                <Card pics={projects[0].pics} link={projects[0].link} title={projects[0].title} description={projects[0].description} />
            </ProjectsWrapper>
        </section>
    </ProjectsContext.Provider>
    )
}
export default Projects;