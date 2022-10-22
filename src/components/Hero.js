import React, { useState } from 'react'
import Hero_2 from '../img/img-2.svg'
import Hero_1 from '../img/img-1.svg'

const Hero = () => {
     
     // kolla  
     // let [colorGrey, setColorGrey] = useState(false)
     // let changeColorGrey = () => {
     //      if (window.scrollY >= 200) {
     //           setColorGrey(true) 
     //      } else {
     //           setColorGrey(false)
     //      }
     // }
     // window.addEventListener('scroll', changeColorGrey)
     // console.log(window.scrollY);

  return (
     <div>
          <section className='__hero'>
               <div className='__container-wide'>
                    <img src={Hero_2} alt="silouette" className='__left'/>
                    {/* <div className={colorGrey ? '__center-hide' : '__center'}> */}
                    <div className='__center'>
                         <h1>sale up</h1>
                         <h1>to 50% off</h1>
                         <p>Online shopping free home delivery over $100</p>
                         <button className='__fixxo-button __button-theme'>shop now</button>
                    </div>
                    <img src={Hero_1} alt="" className='__right'/>
               </div>
          </section>
     </div>
  )
}

export default Hero