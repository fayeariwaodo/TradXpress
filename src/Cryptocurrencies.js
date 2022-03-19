import React from 'react'
import './Cryptocurrencies.css'
import pic from './Images/Group 52.svg'


const Cryptocurrencies = () => {
  return (
    <div className='general'>
        
        <h2 className='involved'>
            Why do people get involved with Cryptocurrencies?
        </h2>

        <div className='sect'>
            <section className='part1'>
             <img className='pic' src={pic} alt="" />
             <div className='parapart'>
             <h5>
                   Easy Mode of Payment
               </h5>
               <p>
                 People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.
               </p>
             </div>
             </section>

             <section className='part2'>
               <img className='pic' src={pic} alt="" />

               <div className='parapart'>
               <h5>
                    Financial Freedom
                 </h5>
                 <p>
                     Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.
                 </p>
               </div>
             </section>

             <section className='part3'>
                 <img className='pic' src={pic} alt="" />
                <div className='parapart'>
                <h5>
                   Investment  
                 </h5>
                 <p>
                     The constant demand as made Cryptocurrencies a Digital Gold used for alternative store of wealth on long term Investments.
                 </p>
             
                </div>
              </section>

              
        </div>

        <button className='learn'>Learn More</button>


    </div>
  )
}

export default Cryptocurrencies