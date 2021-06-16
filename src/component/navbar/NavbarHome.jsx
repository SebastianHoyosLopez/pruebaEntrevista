import React from "react";
import "./navbarHome.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavbarHome = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Form inline>
        <FormControl
          size="sm"
          type="text"
          placeholder="¿QUE ESTÁS BUSCANDO? ESCRÍBE AQUÍ"
          className="mr-sm-2"
        />
      </Form>
      <Nav className="mr-auto">
        <Nav.Link href="#home">MOBILIDAD</Nav.Link>
        <Nav.Link href="#features">CUIDADO EN EL HOGAR</Nav.Link>
        <Nav.Link href="#pricing">PROFESIONALES DE LA SALUD</Nav.Link>
        <Nav.Link href="#pricing">TAPABOCAS Y DESINFECCIÓN</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarHome;
