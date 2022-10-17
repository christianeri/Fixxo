import React from 'react'
import Showcase_5 from '../img/img-5.svg'
import Showcase_6 from '../img/img-6.svg'

const Showcase6040 = () => {
  return (
     <div>
          <section className='__showcase'>
               <div className='__container __showcase6040'>
                    <div className='__left'>
                         <img src={Showcase_5} alt="silouette"/>
                         <div className="__showcase-textbox">
                              <h2>Winter Clearance</h2>
                              <h2>Up to 70% Off!</h2>
                              <p>
                                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.
                              </p>
                              <button className="__fixxo-button __button-dark">
                                   shop now
                              </button>
                         </div>
                    </div>
                    <div className='__right'>
                         <img src={Showcase_6} alt="silouette"/>
                         <div className="__showcase-textbox">
                              <h2>New</h2>
                              <h2>Arrivals</h2>
                              <button className="__fixxo-button __button-dark">
                                   shop now
                              </button>
                         </div>
                    </div>
               </div>
          </section>
     </div>
  )
}

export default Showcase6040