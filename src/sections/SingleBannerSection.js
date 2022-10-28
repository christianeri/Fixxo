import React from 'react'
import FixxoButton from '../components/FixxoButton'

const BannerSingle = () => {
  return (
    <div>
          <section className='single-banner'>
               <div className='container'>
                    <div className="banner-textbox">
                         <h2>Up to 70% off*</h2>
                         <p>Women's, Men's & Kids' Winter Fashion</p>
                         <FixxoButton label='flash sale' color='light'/>
                    </div>
               </div>
          </section> 
    </div>
  )
}

export default BannerSingle