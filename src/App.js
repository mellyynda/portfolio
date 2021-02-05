import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import { colorsObj } from './StyledComp';


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
    <div>
      <Router>
        <Navbar navToggleClicked={navToggleClicked} toggleNav={toggleNav}/>
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
    </div>
  );
}

export default App;
