import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar id="nav-bar" expand="lg" className=' fixed-top'>
      <Container id='container'>
        <Navbar.Brand href="#container-hero" id='logo' data-bs-toggle="collapse">Patricio Denari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='colapse'>
          <Nav id='sections' className="me-auto">
            <Nav.Link href="#about-me-container" className='colapse'>Acerca de mí</Nav.Link>
            <Nav.Link href="#skills-container">Skills</Nav.Link>
            <Nav.Link href="#works-container">Trabajos</Nav.Link>
            <Nav.Link href="#contact-container">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;