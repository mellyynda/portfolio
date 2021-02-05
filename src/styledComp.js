import styled from 'styled-components';

const colorsObj = {
    white: '#FFFFFA',
    yellow: '#E3B505',
    pink: '#D30C7B',
    darkGreen: '#0D5C63',
    black: '#2C1320'
}

const { white, yellow, pink, darkGreen, black } = colorsObj;

const SectionTitle = styled.h1`
align-self: center;
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
@media (min-width: 668px) {
    //In the example below, 12px is the minimum font-size and 24px is the maximum. 400px is the start of the viewport range and 800px is where it should stop scaling. The inclusion or absence of the units after each value is important.
    font-size: calc(70px + (60 - 16)*(100vw - 668px)/(1200 - 668));
  }
`
export { SectionTitle };