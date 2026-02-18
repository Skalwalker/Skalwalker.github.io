import CSS from 'csstype';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router';
import '../../assets/css/navbar.css';

export const NavBar = (): React.JSX.Element => {
  return (
    <Navbar
      className="navbar_response_style ms-3 me-3"
      id="navbar"
      style={{ height: '8vh', zIndex: 100 }}
      expand="md"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <GiHamburgerMenu className="mb-2" color="white" />
      </Navbar.Toggle>
      <Navbar.Brand href="/">
        <div className="bottom_text">
          <h1 className="font_text" style={nameStyle}>
            RenatoNobre
          </h1>
        </div>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavLink
            className="nav-link subtitle"
            to="/about"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            About
          </NavLink>
          <NavLink
            className="nav-link subtitle"
            to="/projects"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            Projects
          </NavLink>
          <NavLink
            className="nav-link subtitle"
            to="/publications"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            Publications
          </NavLink>
          <NavLink
            className="nav-link subtitle"
            to="/experience"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            Experience
          </NavLink>
          <NavLink
            className="nav-link subtitle"
            to="/achivements"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            Achivements
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const buttonActive: CSS.Properties = {
  fontWeight: 'bold',
};

const nameStyle: CSS.Properties = {
  fontSize: '32px',
  color: '#60D7F9',
};
