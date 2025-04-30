import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="footer-container px-5 pt-5">
        <Row >
            <Col >
            <h5>Let's Connect</h5>
            <p>Delivering excellence through digital solutions. Stay connected for more updates.</p> 
            </Col>
            <Col >
            <h5>Quick Links</h5>
             <ul className="list-unstyled list-a">
               <li><a href="#link" className="text-decoration-none text-body" >Home</a></li>
               <li><a href="#link" className="text-decoration-none text-body">About</a></li>
               <li><a href="#link" className="text-decoration-none text-body">Services</a></li>
               <li><a href="#link" className="text-decoration-none text-body">Contact</a></li>
             </ul>
            </Col>
            <Col >
            <h5>Follow Us</h5>
              <div className="d-flex flex-column gap-1 list-a">
                <a href="#link" className="text-decoration-none text-body">Facebook</a>
                <a href="#link" className="text-decoration-none text-body">Twitter</a>
                <a href="#link" className="text-decoration-none text-body">Instagram</a>
              </div>
            </Col>
        </Row>
        <Row>
        <div className="text-center border-top py-3 text-white">
            <small>&copy; {new Date().getFullYear()} James. All rights reserved.</small>
        </div>
        </Row>
      </Container>
    </footer>
   
  );
};

export default Footer;
