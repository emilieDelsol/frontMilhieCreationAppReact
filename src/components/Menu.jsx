import React from "react";
import {Navbar, Nav, NavDropdown, NavbarBrand} from 'react-bootstrap'

function Menu() {

    return (
      <div id="bgNavBar" className="border m-4 d-flex justify-content-lg-center">
        
        <Navbar bg="" variant="dark" expand="lg" className="w-100">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavbarBrand href="/" className="mx-3 my-auto"><h2>Accueil</h2></NavbarBrand>
              <Nav.Link href="/milhieCreation/lifeTree" className="mx-3 my-auto ">Arbres de vie</Nav.Link>
              <Nav.Link href="/milhieCreation/jewerly" className="mx-3 my-auto">Bijoux</Nav.Link>
              <NavDropdown title="Décorations" id="basic-nav-dropdown" className="mx-3 my-auto">
                <NavDropdown.Item href="/milhieCreation/dreamcatcher">Pieges à rêve</NavDropdown.Item>
                <NavDropdown.Item href="/milhieCreation/wallDecos">Decorations murales</NavDropdown.Item>
                <NavDropdown.Item href="/milhieCreation/weddingDecos">Decorations de mariage</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/milhieCreation/Others">Autres</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );}


export default Menu;