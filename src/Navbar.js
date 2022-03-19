import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import trad from "./Images/TradExpress.svg";
import "./Navbar.css";

const Navigate = () => {
  return (
    <div>
      <Navbar className="Parent" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to='/'><img src={trad} alt="" /></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="textp">
              <Link to='./Form3' className="buy-sell" a-white> Instant Buy/Sell</Link>
              <Link to='./Form6' className="leanform" a-white>Learn</Link>
              <Link to='./Form4' className="NavLink" ><button className="logbtn">Login</button></Link>
              <Link to='/Form1'><button className="getbtn">Get Started</button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigate;
