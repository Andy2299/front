import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './css/base.css'
// import LogoMovil from '../imgs/logoMovil.svg';
// import LogoLaptop from '../imgs/logoLaptop.png';

const NavbarMenu = () => (
  <Navbar bg="light" expand="lg" fixed="top" className='nav'>
    {/* <Navbar.Brand as={Link} to="/"><img className='imglogMovil' src={LogoMovil} alt="Logo" />
    <img className='imglogLaptop' src={LogoLaptop} alt="Logo" />
    </Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Mapa</Nav.Link>
        <Nav.Link as={Link} to="/cuenta">Cuenta</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarMenu;
