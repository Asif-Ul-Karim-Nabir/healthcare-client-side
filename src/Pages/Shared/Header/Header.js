import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div className="header-container">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand id="logo">Healthy Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                           <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                           <Nav.Link as={HashLink} to="/specialists#specialists">Specialists</Nav.Link>
                           <Nav.Link as={HashLink} to="/about-us#about-us">About Us</Nav.Link>
                            </Nav>
                            <Nav>
                                {
                                    user?.email ?
                                    <Button onClick={logOut} variant="light">Log Out</Button>  :
                                    <Nav.Link as={Link} to="/login">Register</Nav.Link>
                                }
                                <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;