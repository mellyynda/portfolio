import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StyleContext from './StyleContext';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';


const colorsObj = {
    white: '#FFFFFA',
    yellow: '#E3B505',
    pink: '#D30C7B',
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

function App() {
  const [navToggleClicked, setNavToggleClicked] = useState(false);
  const toggleNav = () => setNavToggleClicked(!navToggleClicked);
  const handleScroll = () => setNavToggleClicked(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <StyleContext.Provider value={colorsObj}>
      <Router>
        <Navbar navToggleClicked={navToggleClicked} setNavToggleClicked={setNavToggleClicked} toggleNav={toggleNav}/>
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
      </Router>    
    <GlobalStyle />
    </StyleContext.Provider>
  );
}

export default App;
