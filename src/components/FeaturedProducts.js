import React from 'react'
import Card from './Card'

const FeaturedProducts = () => {
  return (
     <div>
          <section className="__featured-products">
               <div className='container br'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
               </div>
               <div className='container'>
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