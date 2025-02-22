import React from 'react'
import './FClients.css'
import reliance from '../Assests/Pics/reliance.webp'
import bajaj from '../Assests/Pics/bajaj.webp'
import dalmia from '../Assests/Pics/dalmia.webp'
import sugar from '../Assests/Pics/sugar.webp'
import madhucon from '../Assests/Pics/madhucon.webp'
import iifs from '../Assests/Pics/ilfs.webp'
const FClients = () => {
  return (
    <div>
        <section>
            <div className="head">
                <h1>Featured Clients</h1>

            </div>
            <div className="immg">

             <img src={reliance} alt="" />
             <img src={bajaj} alt="" />
             <img src={iifs} alt="" />
             <img src={dalmia} alt="" />
             <img src={madhucon} alt="" />
             <img src={sugar} alt="" />
             <button class="View-all-clients">VIEW ALL CLIENTS</button>
            </div>
            
        </section>
    </div>
  )
}

export default FClients