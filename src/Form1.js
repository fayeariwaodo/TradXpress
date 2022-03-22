import React from 'react'
import { Link } from 'react-router-dom'
import './Form1.css'

const Form1 = () => {
  return (
    <div className='form1'>
        <h2>
            Welcome!
        </h2>

        <div className='class'>
          <Link className='individual' to='./Form1'>Individual</Link>
         <Link className='individual' to='./Form2'>Business</Link>
        </div>

      <div className='name'>  <input type="text"  placeholder='User Name'/></div>
      <div  className='name'>  <input type="text"  placeholder='Full Name'/></div>
      <div className='name'>  <input type="text"  placeholder='Email'/></div>
      <div className='name'>  <input type="text"  placeholder='Phone Number'/></div>
      <div className='name'>  <input type="text"  placeholder='Referral Code (Optional'/></div>

      <div>
          <h6>
  
          By clicking the Sign Up button below, you agree to TradExpress <a href="">terms and service</a>
          </h6>
      </div>
      <Link to='./Form5'><button className='up'>Sign Up</button></Link>
    </div>
  )
}

export default Form1