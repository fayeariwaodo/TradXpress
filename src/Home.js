import React from "react";
import Landingpage from "./Landingpage";
import Crypto from "./Crypto";
import Cryptocurrencies from "./Cryptocurrencies";
import Simple from "./Simple";
import Ready from "./Ready";
import Customer from "./Customer";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Landingpage />
      <Crypto />
      <Cryptocurrencies />
      <Simple />
      <Ready />
      <Customer />
      <Footer/>
    </div>
  );
};

export default Home;
