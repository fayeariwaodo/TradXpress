import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import trad from "./Images/TradExpress.svg";
import "./Navbar.css";

const Navigate = () => {
  return (
    <div className="navbaar">
      <Navbar bg="" expand="lg" className="mv w-100 m-auto">
      <Container>

        <Link to='/'><img src={trad} alt="" /></Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end">

            <div className="li">
              <Link to='./Form3' className="any"> Instant Buy/Sell</Link>
              <Link to='./Form6' className="any">Learn</Link>
              <Link to='./Form4' className="any log">Log In</Link>
              <Link to='./Form1' className="any get">Get Started</Link>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigate;
