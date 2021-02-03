import styled from 'styled-components';
import { useContext, useState } from 'react';
import StyleContext from './StyleContext';


const Navbar = () => {
    const { white, lightBlue, cadetBlue, teal, darkGreen, black } = useContext(StyleContext);


    const Navbar = styled.nav`
    display: block;
    //position: fixed;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    a {
        font-weight: 600;
        text-decoration: none;
        color: ${black};
    }
    a:hover,
    a:active,
    a:focus {
        color: ${teal};
        border-bottom: 1px solid ${teal};
    }
    div {
        width: 50px;
        height: 50px;
        display: block;
        cursor: pointer;
        position: fixed;
        top: 30px;
        right: 30px;
        border-radius: 50%;
        background-color: ${darkGreen};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    div span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: ${white};
        border-radius: 3px;
        z-index: 1;
    }
    div span:last-child {
        margin-bottom: 0;
    }
    .clicked span:first-child {
        transform: translateY(9px) rotate(45deg);
    }
    .clicked span:nth-child(2) {
        transform: translateX(-50px);
        opacity: 0;
    }
    .clicked span:last-child {
        transform: translateY(-9px) rotate(-45deg);
    }
   
    ul {
        list-style: none;
        text-align: left;
        position: absolute;
        width: 60%;
        top: 0;
        left: 0;
        padding: 50px;
        padding-top: 100px;
        padding-left: 15%;
        
        background: ${white};
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */
        
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
    }
    ul li {
        padding: 15px 0;
        font-size: 22px;
    }
    .clicked ~ ul {
        transform: translate(0, 0);
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
            <ul className="top-nav" id="js-menu">
                <li className="menu-item"><a href="index.html">.Home</a></li>
                <li className="menu-item"><a href="services.html">.Projects</a></li>
                <li id="contact" className="menu-item"><a href="contact.html">.Contact</a></li>
			</ul>       
    </Navbar>
</section>
)
}

export default Navbar;