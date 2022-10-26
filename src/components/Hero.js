import React, { useState } from 'react'
import Hero_2 from '../img/img-2.svg'
import Hero_1 from '../img/img-1.svg'
import FixxoButton from '../components/FixxoButton'

const Hero = () => {
     
  return (
     <div>
          <section className='hero-section'>
               <div className='__container-wide'>
                    <img src={Hero_2} alt="silouette" className='__left'/>
                    <div className='__center'>
                         <h1>sale up</h1>
                         <h1>to 50% off</h1>
                         <p>Online shopping free home delivery over $100</p>
                         {/* <button className='__fixxo-button __button-theme'>shop now</button> */}
                         <FixxoButton label='shop now' color='theme'/>
                    </div>
                    <img src={Hero_1} alt="" className='__right'/>
               </div>
          </section>
     </div>
  )
}

export default Hero