import React from "react";
import "./Customer.css";
import trade from "./Images/Union 1.svg";
import quote from "./Images/Group 8699 (1).svg";

import joe from './Images/peter_avatar.jpg'
import fae from './Images/rilwan_avatar.jpeg'
import nate from './Images/joseph_avatar.jpg'

const Customer = () => {
  return (
    <div className="reviewall">
      <div className="review">
        <h3>Customer's Review</h3>
      </div>

      <div className="reviewflex">
        <div className="reviewpic">
          <img className="reviewimg"  src={trade} alt=" " />
          <img className="joe" src={joe} alt="" />
          <img className="img1" src={quote} alt="" />
          <p className="text1">
            Trading on TradExpress mobile and web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
        </div>

        <div className="reviewpic">
          <img className="reviewimg" src={trade} alt="" />
          <img className="faye" src={fae} alt="" />
          <img className="img2" src={quote} alt="" />
          <p className="text1">
            They have the best rate compared to other platforms with fast
            payout.
          </p>
        </div>

        <div className="reviewpic">
          <img className="reviewimg"  src={trade} alt="" />
          <img className="nate" src={nate} alt="" />
          <img className="img1" src={quote} alt="" />
          <p className="text1">
            Easy to fund and withdraw coins or cash on their platform, I will
            definitely trade with them again.
          </p>
        </div>
      </div>

      {/* <span className='faye'>
              
        
            </span>

              <span className='Nora'>
                 
              </span>
             
           <span  className='Nathan'>
            
           </span> */}

     




    </div>
  );
};

export default Customer;
