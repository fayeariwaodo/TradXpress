import React from 'react'
import { Link } from 'react-router-dom'
import message from './Images/mailing.svg'
import './Form1.css'

const Form5 = () => {
  return (
    <div className='form1'>
        <p>
            You are almost In!
        </p>

        <h6>Welcom Iretiayo</h6>

        <img src={message} alt="" />


        <p className='para'>An activation link has been sent to <Link>Ireti4tech@gmail.com</Link> Please click on the link to verify your email and activate your TradExpress account.</p>

        <Link><button className='up'>Continue</button></Link>

        <p className='para'>Didn't get an email? Kindly click <Link>resend email</Link> Wrong email supplied? <Link>Edit email address</Link></p>


    </div>
  )
}

export default Form5