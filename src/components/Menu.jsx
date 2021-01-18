import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Menu() {

    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/milhieCreation"><img src="https://i.servimg.com/u/f19/18/20/68/28/th/img_2023.jpg" className="w-25" alt="milhie création"/> Milhie création</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/milhieCreation/lifeTree">Arbres de vie</Nav.Link>
              <Nav.Link href="/milhieCreation/jewerly">Bijoux</Nav.Link>
              <NavDropdown title="Décorations" id="basic-nav-dropdown">
                <NavDropdown.Item href="/milhieCreation/dreamcatcher">Pieges à rêve</NavDropdown.Item>
                <NavDropdown.Item href="/milhieCreation/wallDecos">Decorations murales</NavDropdown.Item>
                <NavDropdown.Item href="/milhieCreation/weddingDecos">Decorations de mariage</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/milhieCreation/Others">Autres</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );}


export default Menu;