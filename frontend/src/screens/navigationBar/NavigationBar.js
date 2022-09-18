import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";
import "./navigation.css";


function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>
      {e.name}
    </Nav.Link>
  ));
}

function NavigationBar() {

  


  return (
    <div id="home">

      <Navbar className="navigation__container" expand="md" bg="primary">
        

        <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
          E-Health Consulatation Site
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          style={{
            justifyContent: "flex-end",
            marginRight: "50rem",
            borderColor: "none",
          }}
        >
          
          <Nav className="links" style={{ margin: "0 1rem" }}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>



      </Navbar>
    </div>
  );
}

export default NavigationBar;
