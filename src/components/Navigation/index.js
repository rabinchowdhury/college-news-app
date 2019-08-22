import React from 'react';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href={ROUTES.LANDING} style={{color: '#ffffff', fontWeight: '600'}}>College News App</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
          <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
          <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
          { !!authUser.roles[ROLES.ADMIN] && (
            <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>
          )}
        <SignOutButton />
        </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href={ROUTES.LANDING} style={{color: '#ffffff', fontWeight: '600'}}>College News App</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href={ROUTES.LANDING} style={{color: '#ffffff'}}>Landing</Nav.Link>
          <Button className="signin-button"><Nav.Link href={ROUTES.SIGN_IN} style={{color: '#ffffff'}}>Sign In</Nav.Link></Button>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
