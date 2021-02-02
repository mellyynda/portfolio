import styled from 'styled-components';
import { useContext, useState } from 'react';
import StyleContext from './StyleContext';


const Navbar = () => {
    const { white, lightBlue, cadetBlue, teal, darkGreen, black } = useContext(StyleContext);


    const Navlist = styled.ul`
    list-style: none;
    text-align: left;
    li a{
        text-decoration: none;
    }
    `
    const Navbar = styled.nav`
    display: block;
    position: fixed;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    a {
        text-decoration: none;
        color: ${black};
        transition: color 0.3s ease;
    }
    a:hover {
        color: ${teal};
    }
    div {
        padding: 15px;
        display: block;
        position: absolute;
        cursor: pointer;
        opacity: 1; /* hide this */
        z-index: 2; /* and place it over the hamburger */
        -webkit-touch-callout: none;
    }
    div span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: ${darkGreen};
        border-radius: 3px;
        z-index: 1;
    }
    .clicked span:first-child {
        transform: translateY(9px) rotate(45deg);
        opacity: 1;
    }
    .clicked span:nth-child(2) {
        transform: translateX(-50px);
        opacity: 0;
    }
    .clicked span:last-child {
        transform: translateY(-9px) rotate(-45deg);
        opacity: 1;
    }
   
    ul {
        position: absolute;
        width: 300px;
        // margin: -100px 0 0 -50px;
        top: 0;
        left: 0;
        padding: 50px;
        padding-top: 125px;
        
        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */
        
        transform-origin: 0% 0%;
        transform: translate(-100%, -50px);
    }
    ul li {
        padding: 10px 0;
        font-size: 22px;
    }
    .clicked ~ ul {
        transform: translate(0, -50px);
    }
    `
    const [isClicked, setIsClicked] = useState(false);
return (
<section>
    <Navbar>
        <div className={isClicked ? "clicked" : ""} onClick={() => setIsClicked(!isClicked) } >
            <span></span>
            <span></span>
            <span></span>
        </div>
            <Navlist className="top-nav" id="js-menu">
                <li className="menu-item"><a href="index.html">Home</a></li>
                <li className="menu-item"><a href="services.html">Projects</a></li>
                <li id="contact" className="menu-item"><a href="contact.html">Contact</a></li>
			</Navlist>           
        
    </Navbar>
</section>
)
}

export default Navbar;