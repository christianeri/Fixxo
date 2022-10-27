import React from 'react'
import Showcase_3 from '../img/img-3.svg'
import Showcase_4 from '../img/img-4.svg'
import FixxoButton from './FixxoButton'

const BannerDouble = () => {
  return (
    <div>
          <section className='__showcase'>               
               <div className='__container-wide __banner-double'>
                    <div className='__left'>
                         <img src={Showcase_3} alt="silouette"/>
                         <div className="__showcase-textbox">
                              <h2>Pamela Reif's</h2>
                              <h2>Top Picks</h2>
                              <FixxoButton label='shop now' color='dark'/>
                         </div>
                    </div>
                    <div className='__right'>
                         <img src={Showcase_4} alt="silouette"/>
                         <div className="__showcase-textbox">
                              <h2>Let's be</h2>
                              <h2>Conscious</h2>
                              <FixxoButton label='shop now' color='light'/>
                         </div>
                    </div>
               </div>
          </section>
    </div>
  )
}

export default BannerDouble