import React from 'react'
import FUTURE from '../Assests/Pics/FUTURE.webp'
import './Future.css'

const Future = () => {
  return (
    <div>
        <section className='whole'>
            <div className='text-1'>
                <h1>Responsible Engineering for a Sustainable Future</h1>
                <p>Avant-Garde is committed to contributing to Environmental, Social and Governance (ESG) initiatives for creating a Sustainable World.

In each of our engagements, we follow a proven Engineering Net Zero Blueprint so that we and our clients contribute our part to 2050 Sustainable Goals. </p>
            </div>
            <div className="imagg">
                <img src={FUTURE} alt="" />
            </div>
            <div className="text-2">
            <div class="content-section">
        <div class="highlight">
            <h2>Cleaner & Greener Energy</h2>
            <p>We work with renewable energy companies to generate new value with positive impact on the planet.</p>
        </div>

        <div class="highlight">

            <h2>Alternate Fuels</h2>
            <p>Our expertise helps clients to invest wisely and optimise performance on emerging alternative fuels.</p>
        </div>

        <div class="highlight">
            <h2>Turning Waste into Gold</h2>
            <p>Avant-Garde’s multi-discipline engineering and technology expertise helps deploying waste to energy initiatives.</p>
        </div>

        <div class="highlight">
            <h2>Quality Water</h2>
            <p>We enhance quality of water for varied applications and facilitate advancements with recycling waste water.</p>
        </div>
    </div>
            </div>
        </section>
    </div>
  )
}

export default Future