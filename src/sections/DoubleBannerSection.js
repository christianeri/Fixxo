import React from 'react'
import Showcase_3 from '../img/img-3.svg'
import Showcase_4 from '../img/img-4.svg'
import FixxoButton from '../components/FixxoButton'

const BannerDouble = () => {
  return (
    <div>
          <section className='double-banner'>               
               <div className='__container-wide'>
                    <div className='__left bb'>
                         <img src={Showcase_3} alt="silouette"/>
                         <div className="banner-textbox br">
                              <h2>Pamela Reif's</h2>
                              <h2>Top Picks</h2>
                              <FixxoButton label='shop now' color='dark'/>
                         </div>
                    </div>
                    <div className='__right'>
                         <img src={Showcase_4} alt="silouette"/>
                         <div className="banner-textbox">
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