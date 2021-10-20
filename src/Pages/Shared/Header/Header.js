import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                            <Link  to="/home">Home</Link>
                           <Link to="/services">Services</Link>
                           <Link  to="/specialists">Specialists</Link>
                            </Nav>
                            <Nav>
                                {
                                    user?.email ?
                                    <Button onClick={logOut} variant="light">Log Out</Button>  :
                                    <Link as={Link} to="/login">Register</Link>
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