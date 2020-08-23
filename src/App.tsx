import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { routes } from './routes'

function App() {
  return (
    <div>
      <Router>
        <div>
        <Navbar style={{ height: '8vh', zIndex: 100 }} bg="light" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/About">About</Link>
              <Link className='nav-link' to="/Skills">Skills</Link>
              <Link className='nav-link' to="/Experience">Experience</Link>
              <Link className='nav-link' to="/Achivements">Achivements</Link>
              <Link className='nav-link' to="/Crafts">Crafts</Link>
              <Link className='nav-link' to="/Contact Me">Contact Me</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
