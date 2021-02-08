import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colorsObj } from './StyledComp';

const { white, darkGreen, black } = colorsObj;

const Nav = styled.nav`
    display: block;
    z-index: 1;
    div {
        width: 50px;
        height: 50px;
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
        z-index: 4;
    }
    div span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        background: ${white};
        border-radius: 3px;
        z-index: 4;
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
        position: fixed;
        list-style: none;
        text-align: left;
        width: 50vw;
        height: 100vh;
        top: 0;
        left: 0;
        padding: 50px;
        padding-top: 100px;
        padding-left: 15%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        
        background: ${white};
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */

        z-index: 3;
        
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        @media screen and (min-width: 1024px ) {
            left: auto;
            right: 0;
            height: auto;
            padding-left: 50px;
            display: flex;
            justify-content: space-around;
            transform: translate(100%, 0);
        }
    }
    ul a {
        font-weight: 600;
        text-decoration: none;
        color: ${black};
    }
    ul li {
        font-size: 22px;
        padding: 25px 0;
        span {
            border-top:3px solid ${darkGreen};
        }
    }
    .clicked ~ ul {
        transform: translate(0, 0);
    }
    `

const Navbar = ({navToggleClicked, toggleNav}) => {

    return (
    <section>
        <Nav>
            <div className={navToggleClicked ? "clicked" : ""} onClick={toggleNav} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="top-nav" id="js-menu">
                <Link to="/" onClick={toggleNav}><li className="menu-item"><span>.Home</span></li></Link>
                <Link to="/projects" onClick={toggleNav}><li className="menu-item"><span>.Projects</span></li></Link>
                <Link to="/contact" onClick={toggleNav}><li id="contact" className="menu-item"><span>.Contact</span></li></Link>
            </ul>       
        </Nav>
    </section>
    )
    }

export default Navbar;