import React from 'react'
import Showcase_5 from '../img/img-5.svg'
import Showcase_6 from '../img/img-6.svg'
import FixxoButton from '../components/FixxoButton'
// import PromoBox from '../components/PromoBox'

const SplitBanner = () => {
  return (

     <section className='split-banner'>
          <div className='__container-wide'>
               <div className='__left'>
                    <img src={Showcase_5} alt="silouette" className=''/>
                    <div className="banner-textbox">
                         <h2>Winter Clearance</h2>
                         <h2>Up to 70% Off!</h2>
                         <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.
                         </p>
                         <FixxoButton label='shop now' color='dark'/>
                    </div>
               </div>
               <div className='__right'>
                    <img src={Showcase_6} alt="silouette"/>
                    <div className="banner-textbox">
                         <h2>New</h2>
                         <h2>Arrivals</h2>
                         <FixxoButton label='shop now' color='dark'/>
                    </div>
               </div>
          </div>
     </section>
  )
}

export default SplitBanner