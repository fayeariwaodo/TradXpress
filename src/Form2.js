import React from 'react'
import './Form1.css'
import { Link } from 'react-router-dom'

const Form2 = () => {
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
      <div  className='name'>  <input type="text"  placeholder='Business Name'/></div>
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

export default Form2



// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Form1.css'

// const Form2 = () => {
//   return (
//     <div className='form1'>
//         <h2>
//             Welcome!
//         </h2>

//         <Link to='./Form1'><button className='individual' >Individual</button></Link>
//       <Link to='./Form2'>   < button className='individual' >Business</button></Link>

//       <div className='name'>  <input type="text"  placeholder='UserName'/></div>
//       <div  className='name'>  <input type="text"  placeholder='Business name'/></div>
//       <div className='name'>  <input type="text"  placeholder='Email'/></div>
//       <div className='name'>  <input type="text"  placeholder='Phone Number'/></div>
//       <div className='name'>  <input type="text"  placeholder='Referral Code (Optional'/></div>

//       <div>
//           <h6>
  
//           By clicking the Sign Up button below, you agree to TradExpress <a href="">terms and service</a>
//           </h6>
//       </div>
//       <a href=""><button className='up'>Sign Up</button></a>
//     </div>
//   )
// }

// export default Form2