import React from "react";
import { Link } from "react-router-dom";

const Form7 = () => {
  return (
    <div className="form1">
      <h2 className="inst">Buy/Sell Instantly</h2>

      <Link to="./Form3">
        <button className="individual">Buy</button>
      </Link>
      <Link to="./Form7">
        <button className="individual">Sell</button>
      </Link>

      <h6 className="currency">Coin to Buy</h6>
      <div>
        <select className="bit" name="" id="">
          <option value="">Bitcoin(BTC</option>
          <option value="">usd</option>
          <option value="">ngn</option>
        </select>
      </div>

      <div>
        <h6 className="currency">Currency</h6>
        <select className="bit" name="" id="">
          <option value="">Dollar(USD)</option>
          <option value="">Naira(NGN)</option>
          <option value="">ngn</option>
        </select>
      </div>

      <div>
        <h6 className="currency">Amount</h6>
        <input className="twobutton" type="text" placeholder="USD" />{" "}
        <input className="second" type="text" placeholder=" 10,000.00" />
      </div>
      <a href="">
        <button className="up">Continue</button>
      </a>
    </div>
  );
};

export default Form7;
