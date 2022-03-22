import React from "react";
import './Form1.css'
import { Link } from "react-router-dom";

const Form3 = () => {
  return (
    <div className="form1">
      <h2 className="inst">Buy/Sell Instantly</h2>

      <div className='class'>
          <Link className='individual' to='./Form3'>Individual</Link>
         <Link className='individual' to='./Form7'>Business</Link>
        </div>

      <h6  className="currency">Coin to Buy</h6>
      <div>
        <select className="bit" name="" id="">
          <option value="">Bitcoin(BTC)</option>
          <option value="">USD</option>
          <option value="">NGN</option>
          <option value="">ETH</option>
        </select>
      </div>

      <div>
        <h6  className="currency">Currency</h6>
        <select className="bit" name="" id="">
          <option value="">Naira(NGN)</option>
          <option value="">USD</option>
          <option value="">ETH</option>
          <option value="">BTC</option>
        </select>
      </div>

      <div >
          <h6  className="currency">Amount</h6>
          <input className="twobutton" type="text" placeholder="NGN" disabled /> <input className="second" type="text" placeholder=" 3,000,000.00"/>
      </div>
      <a href=""><button className="up">Continue</button></a>
    </div>
  );
};

export default Form3;
