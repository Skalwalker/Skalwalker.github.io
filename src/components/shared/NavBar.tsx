import React from 'react';
import {NavLink} from 'react-router-dom';
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
                <Navbar.Brand>
                    <div className="bottom_text">
                        <h1 className="font_text" style={nameStyle}>RenatoNobre</h1>
                    </div>
                </Navbar.Brand>
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


const nameStyle: CSS.Properties = {
      fontSize: '34px',
      color: '#60D7F9'
}

export default NavBar;
