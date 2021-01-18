import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Menu() {

    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/milhieCreation">milhieCreation</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/milhieCreation">Home</Nav.Link>
              <Nav.Link href="/milhieCreation/lifeTree">Arbres de vie</Nav.Link>
              <Nav.Link href="/milhieCreation/jewerly">Bijoux</Nav.Link>
              <NavDropdown title="Décorations" id="basic-nav-dropdown">
                <NavDropdown.Item href="/milhieCreation/dreamcatcher">Pieges à rêve</NavDropdown.Item>
                <NavDropdown.Item href="/milhieCreation/wallDecos">Decocartions murales</NavDropdown.Item>
                <NavDropdown.Item href="/milhieCreation/weddingDecos">Decorations de mariage</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/milhieCreation/Others">Autres</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );}


export default Menu;