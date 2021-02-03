import styled, { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StyleContext from './StyleContext';
import Navbar from './Navbar';
import Home from './Home'
import Projects from './Projects';
import Contact from './Contact';

const colorsObj = {
    white: '#FFFFFA',
    lightBlue: '#78CDD7',
    cadetBlue: '#44A1A0',
    teal: '#247B7B',
    darkGreen: '#0D5C63',
    black: '#2C1320'
}

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${colorsObj.black};
  }
`;
const AppWrapper = styled.div`

`

const Content = styled.div`
padding-top: 50px;
`

function App() {
  return (
    <StyleContext.Provider value={colorsObj}>
    <AppWrapper className="App">
      <Router>
        <Navbar />
        <Content>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </Router>
    </AppWrapper>
    
    <GlobalStyle />
    </StyleContext.Provider>
  );
}

export default App;
