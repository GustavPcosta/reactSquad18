import React from 'react';
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Logo-da-nav.png'


function NavBarComponentes(){
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" className="color-nav">
        <img src={logo} className='logopng'></img>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./bio" className='color-name-white'>Biodiversidade</Nav.Link>
            <Nav.Link href="./sobre"  className='color-name-white'>Sobre nós</Nav.Link>
            <NavDropdown className='text' title="Conteúdo" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="./blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="./faleConosco">
                Fale Conosoco
              </NavDropdown.Item>
              <NavDropdown.Item href="listAssociacao">
                Lista das Associações
              </NavDropdown.Item>
              <NavDropdown.Item href="listCatador">
                Lista dos Catadores
              </NavDropdown.Item>
              <NavDropdown.Item href="listDoador">
                Lista dos Doadores
              </NavDropdown.Item> 
            </NavDropdown>
          </Nav>
          <Nav.Link href="./login" className='color-name-white'>Login</Nav.Link>
          <Nav.Link href="./menu" className='color-name-white cadastro'>Cadastro</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}


export default NavBarComponentes;