import React from 'react'

import { Link } from 'react-router-dom'
import mark from './Images/Icon awesome-check-circle.svg'

const Form4 = () => {
  return (
    <div className='form1'>
       
        <h2>
            Welcome Back!
        </h2>

 
      <div className='name'>  <input type="text"  placeholder='Username'/></div>
      <div  className='name'>  <input type=""  placeholder='Password'/></div>


      <div className='move'>
          <img src={mark} alt="" /><h6>remember password</h6> 
          
          <Link className='forgot'>forgot password? </Link>
      </div>
     

   
      <Link to='Form5'><button className='up'>Login</button></Link>

      <div>
      <h6>
  
          New User? <Link>click here</Link>
  </h6>
      </div>

    </div>
  )
}

export default Form4