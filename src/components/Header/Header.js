import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';
import { Logo } from './Header.styles';

export const Header = () => (
    <Navbar collapseOnSelect expand="md">
        <Navbar.Brand>
            <Logo to="/">LOGO</Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/about" className="nav-link">
                    About
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
