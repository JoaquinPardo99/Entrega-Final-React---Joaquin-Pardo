import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {CartWidget} from "./CartWidget";
export const NavBar = () => {
    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Plástico Records</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#catalogo">Catálogo</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        < CartWidget />
        </Container>
    </Navbar>
    );
};