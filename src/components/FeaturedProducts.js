import React from 'react'
import CardTall from './CardTall'

const FeaturedProducts = () => {
  return (
     <div>
          <section className="__featured-products">
               <div className='container br'>
                    <CardTall/>
                    <CardTall/>
                    <CardTall/>
                    <CardTall/>
               </div>
               <div className='container'>
                    <CardTall/>
                    <CardTall/>
                    <CardTall/>
                    <CardTall/>
               </div>
          </section>
     </div>
  )
}

export default FeaturedProducts