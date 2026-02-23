import CSS from 'csstype';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router';
import styled from 'styled-components';

import { BottomText, FontText } from '../../styles/primitives';

export const NavBar = (): React.JSX.Element => {
  return (
    <StyledNavbar className="ms-3 me-3" expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <GiHamburgerMenu className="mb-2" color="white" />
      </Navbar.Toggle>
      <Navbar.Brand href="/">
        <BottomText>
          <FontText as="h1" style={nameStyle}>
            RenatoNobre
          </FontText>
        </BottomText>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavLink
            className="nav-link"
            to="/about"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            About
          </NavLink>
          <NavLink
            className="nav-link"
            to="/projects"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            Projects
          </NavLink>
          <NavLink
            className="nav-link"
            to="/publications"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            Publications
          </NavLink>
          <NavLink
            className="nav-link"
            to="/experience"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            Experience
          </NavLink>
          <NavLink
            className="nav-link"
            to="/achievements"
            style={({ isActive }) => (isActive ? buttonActive : {})}
          >
            Achievements
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

const buttonActive: CSS.Properties = {
  fontWeight: 'bold',
};

const nameStyle: CSS.Properties = {
  fontSize: '32px',
  color: '#60D7F9',
};

const StyledNavbar = styled(Navbar)`
  height: 8vh;
  z-index: 100;

  .nav-link {
    font-family: filson-pro, sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  .navbar-toggler:focus {
    border: none;
    text-decoration: none;
    outline: none;
  }

  @media (max-width: 767.98px) {
    .navbar-collapse {
      background-color: rgba(7, 14, 32, 0.9);
      border-radius: 15px;
      border-width: 3px;
      border: solid;
      border-color: var(--bs-primary);
      padding: 10px;
    }
  }
`;
