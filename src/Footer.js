import React from 'react'
import icon from "./Images/Group 79.svg";
import copypic from './Images/Group 78.svg';

const Footer = () => {
  return (
    <div>

<div className="Footer">
        <div className="pro">
          <h5>Products</h5>

          
            <li>Bitcoin</li>
            <li>Alt</li>
            <li>Fiat</li>
            <li>Refill</li>
            <li>P2P</li>
        
        </div>

        <div className="lean">
          <h5>Learn</h5>
          
            <li>Bloq</li>
            <li>Help centre</li>
        </div>

        <div className="contact">
          <h5>Contact</h5>
            <li>hello@tradeexpress.com </li>
            <li>support@tradeexpress.com</li>
            <img src={icon} alt="" />
        </div>

        <div className="comp">
          <h5>Company</h5>
          
            <li>About Us</li>
            <li>Careers</li>
            <li>Rates</li>
            <li>Mobile</li>
        </div>

        <div className="legal">
          <h6>Legal</h6>
            <li>Privacy Policy</li>
            <li>Anti-Money Laundering</li>
            <li>Terms and Conditions</li>
          
        </div>
      </div>



     <div className="copyright">
       <img className="copyimg" src={copypic} alt="" />

     </div>






    </div>
  )
}

export default Footer