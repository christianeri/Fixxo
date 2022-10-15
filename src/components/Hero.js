import React from 'react'
import Hero_2 from '../img/img-2.svg'
import Hero_1 from '../img/img-1.svg'

const Hero = () => {
  return (
    <div>
          <section className='hero'>
               <div className='container-xxl'>
                    <img src={Hero_2} alt="silouette" id="hero-img-left" />
                    <img src={Hero_1} alt="" id="hero-img-right" />
               </div>
               <div className='hero-center'>
                    <h1>sale up</h1>
                    <h1>to 50% off</h1>
                    <p>Online shopping free home delivery over $100</p>
                    <button className='fixxo-button button-theme'>shop now</button>
               </div>
          </section>
    </div>
  )
}

export default Hero