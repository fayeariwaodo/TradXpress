import React from 'react'
import './Ready.css'
import play from './Images/Group 69.svg'
import appimg from './Images/Group 68.svg'

const Ready = () => {
  return (
    <div>
       <div className='Read'>
          <p>

            Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
         </p> 
         <h3>
             Creat your account for free and start trading today!
         </h3>
         </div> 
         
         <div className='btttn'>
           <button className='acctbtn'>Get Started</button>

         </div>

          <div className='store'>
               <img  className='appstore' src={play} alt="" />
              <img className='appstore' src={appimg} alt="" />
          </div>
    </div>
  )
}

export default Ready