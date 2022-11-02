import React, { CSSProperties } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {GiHamburgerMenu} from 'react-icons/gi';

import CSS from 'csstype';


type myState = { }
type myProps = { }

class NavBar extends React.Component<myProps, myState> {
    render(){
        return (
            <Navbar id="navbar" style={{backgroundColor: "transparent", height: '8vh', zIndex: 100 }} expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav"> <GiHamburgerMenu color="white"/> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand>Under Development</Navbar.Brand>
                <Nav className="ml-auto">
                    <NavLink className='nav-link subtitle' to="/about/core" activeStyle={button_active}>About</NavLink>
                    <NavLink className='nav-link subtitle' to="/projects" activeStyle={button_active}>Projects</NavLink>
                    <NavLink className='nav-link subtitle' to="/publications" activeStyle={button_active}>Publications</NavLink>
                    <NavLink className='nav-link subtitle' to="/experience" activeStyle={button_active}>Experience</NavLink>
                    <NavLink className='nav-link subtitle' to="/achivements" activeStyle={button_active}>Achivements</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const button_active: CSS.Properties = {
    fontWeight: 'bold'
}



export default NavBar;
