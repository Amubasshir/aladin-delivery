import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/Aladin Logo Horizontal.png';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark "
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            {' '}
            <Nav.Link href="/home#home">
              <img src={logo} alt="" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#contact">
              Contact
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant="secondary">
                LogOut
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            {user?.email ? (
              <Nav.Link as={Link} to="/myOrders">
                MyOrders
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/">
                Welcome
              </Nav.Link>
            )}

            <Navbar.Text>
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
