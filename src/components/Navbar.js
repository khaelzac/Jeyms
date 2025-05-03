import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../Assets/J-logo.png";

const BootstrapNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar className={`nav-section ${scrolled ? 'nav-shadow' : ''}`} expand="lg" sticky="top">
      <Container className="nav-container">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={`nav-link-custom ${scrolled ? 'nav-link-w' : ''} hov`} href="#home">Home<span className={scrolled ? 'span-white' : 'span-hover'}></span></Nav.Link>
            <Nav.Link className={`nav-link-custom ${scrolled ? 'nav-link-w' : ''} hov`} href="#skills">Skills<span className={scrolled ? 'span-white' : 'span-hover'}></span></Nav.Link>
            <Nav.Link className={`nav-link-custom ${scrolled ? 'nav-link-w' : ''} hov`} href="#about">About Me<span className={scrolled ? 'span-white' : 'span-hover'}></span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;
