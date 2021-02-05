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
margin-top: 220px;
align-self: center;
font-size: 5rem;
display: flex;
flex-direction: column;
span{
    color: ${yellow};
}
span:first-child {
    color: ${black};
}
`
export { SectionTitle };