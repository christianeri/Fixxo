import React from 'react'
import Showcase_3 from '../img/img-3.svg'
import Showcase_4 from '../img/img-4.svg'

const Showcase5050 = () => {
  return (
    <div>
          <section className='__showcase'>               
               <div className=' __container showcased5050'>
                    <div className='__left'>
                    <img src={Showcase_3} alt="silouette"/>
                         <div className="__showcase-textbox border">
                              <h2>Pamela Reif's</h2>
                              <h2>Top Picks</h2>
                              <button className="__fixxo-button __button-dark">
                                   shop now
                              </button>
                         </div>
                    </div>
                    <div className='__right'>
                         <img src={Showcase_4} alt="silouette"/>
                         <div className="__showcase-textbox border">
                              <h2>let's be</h2>
                              <h2>conscious</h2>
                              <p>
                                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.
                              </p>
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

export default Showcase5050