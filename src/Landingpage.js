import React from 'react'
import './Landingpage.css'
import playstore from './Images/Group 69.svg'
import apple from './Images/Group 68.svg'
import { Link } from 'react-router-dom'



const Landingpage = () => {
  return (
    <div className='homepage'>
       <div className='container'>
            <h1 className='Buy'>
                Buy, Sell and manage your<br></br> Crypto on TradeExpress.
            </h1>

            <p >
               Easily Trade Cryptocurriencies like  BTC, USD, ETH, LTC & XRP with NGN.
            </p>
              <div className='abtn'>
              <Link to='/Form4' ><button className='Start'>Get    Started</button></Link>
              </div>
           
           <div className='btnflex'>
            <img src={apple} alt="" />
            <img src={playstore} alt="" />
          </div>
       </div>

    </div>
  )
}

export default Landingpage