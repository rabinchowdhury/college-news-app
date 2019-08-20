import React from 'react';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Navbar, Nav } from 'react-bootstrap';

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
  <Navbar expand="lg" variant="dark" bg="dark">
    <Navbar.Brand href={ROUTES.LANDING}>React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
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
<Navbar expand="lg" variant="dark" bg="dark">
  <Navbar.Brand href={ROUTES.LANDING}>React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
        <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default Navigation;
