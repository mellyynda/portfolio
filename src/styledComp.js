import styled from 'styled-components';

export const colorsObj = {
    white: '#FFFFFA',
    yellow: '#E3B505',
    pink: '#D30C7B',
    darkGreen: '#0D5C63',
    black: '#2C1320'
};

const { white, yellow, darkGreen, black } = colorsObj;

const SectionScreen = styled.div`
background: linear-gradient(to right, ${white} 0%, ${white} 50%, ${darkGreen} 50%, ${darkGreen} 100%);
height: 100vh;
// display: flex;
// justify-content: center;
margin-bottom: 90px;
`
const HalfScreen = styled.div`
position: absolute;
top: 0;
left: 0;
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const SectionTitle = styled.h1`
font-size: 50px;
display: flex;
flex-direction: column;
border-top: 5px solid ${darkGreen};
span{
    color: ${yellow};
}
span:first-child {
    color: ${black};
}
@media screen and (min-width: 508px) {
    //calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
    //In the example below, 12px is the minimum font-size and 24px is the maximum. 400px is the start of the viewport range and 800px is where it should stop scaling. The inclusion or absence of the units after each value is important.
    font-size: calc(70px + (160 - 70)*(100vw - 668px)/(1900 - 668));
  }
`
export { SectionScreen, SectionTitle, HalfScreen };