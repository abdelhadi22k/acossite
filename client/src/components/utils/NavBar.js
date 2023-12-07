import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
      <Container>
        
        <Navbar.Brand href="#home">
          <img
            className="brendImg"
            src="fegma/main logo b.png"
            alt="Logo"
          ></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navLink">
            <Nav.Link href="#Services">Services </Nav.Link>
            <Nav.Link href="#Aboutme">About me</Nav.Link>
            <Nav.Link href="#portfolio">portfolio</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
       
          </Nav>
          <Nav> 
            <Nav.Link style={{color:"#fff"}} className='login' href="#Connectme">Connect me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;