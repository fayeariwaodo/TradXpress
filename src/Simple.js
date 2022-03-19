import React from 'react'
import './Simple.css'
import picc from './Images/Group 52.svg'
import depo from './Images/Group 52.svg'
import picto from './Images/Group 28.svg'

const Simple = () => {
  return (
    <div className='back'>
    <h2 className='sell'>
        Buy and Sell CryptoCurrency in 3 Simple steps
    </h2>
     
     <div className='Contain'>

     <span className='Acct'>
     <h4 >
         Create a free Account
     </h4>
     <p className='sign'>
         Sign up for your free TradExpress Wallet on web, iOS, or Andriod devices and follow our easy process to set up your profile
     </p>
     </span>
        

        <span className='free'>
          <img className='simpleimg' src={picc} alt="" />
        </span>

      <div>

      </div>



     </div>

     <section className='flexsection'>


          <span className='depo'>
           <h4>
               Deposit
           </h4>

           <p className='sign'>
               Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrwal

           </p>
       </span>
            <span className='depoimg'>
                <img className='simpleimg' src={depo} alt="" />
            </span>
            
        
        </section>
        
        <div className='buyflex'>
            <div className='buypara'>
               <h4>
                Buy/Sell Crypto
               </h4>

               <p className='sign'>
                 Buy BTC USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.
               </p>

            </div>
       

         <div className='sellimg'>
             <img className='simpleimg' src={picto} alt="" />
          </div>
      </div>

    </div>
  )
}

export default Simple