import React from 'react'
import Card from './Card'

const FeaturedProducts = () => {
  return (
     <div>
          <section className="__featured-products">
               <div className='container-md br'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
               </div>
               <div className='container-md'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
               </div>
          </section>
     </div>
  )
}

export default FeaturedProducts