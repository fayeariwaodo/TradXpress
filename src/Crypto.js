// import React from 'react'
import React , {useState, useEffect} from 'react'
import './Crypto.css'

const Crypto = () => {
    const [Crypt, setCrypt]=useState([])

    useEffect(()=>{
        fetch('https://api.coinlore.net/api/tickers/?start=0&limit=5')
        .then(response => response.json())
        .then(json => setCrypt(json.data))
    })
  return (
    <div className='fae'>
        {Crypt.map((nora)=>{

      const {id, percent_change_1h, price_usd, symbol}= nora

      return(
        <div className='you' key={id}>
            <div className='fle'>
       
       
               <div className='cryptflex'>
                 {/* <span>{name}</span> */}
                 <span>{symbol}/NGN</span>
                 <span>{percent_change_1h}%</span>
               </div>
             <h2>{price_usd}</h2>
          </div>
           

         </div>
         )
       
       
         } )}
       
        
    </div>
  )
}

export default Crypto