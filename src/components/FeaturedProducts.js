import React from 'react'
import Card from './Card'

const FeaturedProducts = () => {
  return (
     <div>
          <section class="__featured-products">
               <div className='container-md'>
               
                    <div class="row g-0">
                         <div class="col"><Card/></div>
                         <div class="col"><Card/></div>
                         <div class="col"><Card/></div>
                         <div class="col"><Card/></div>
                    </div>
                    <div class="row g-0">
                         <div class="col"><Card/></div>
                         <div class="col"><Card/></div>
                         <div class="col"><Card/></div>
                         <div class="col"><Card/></div> 
                    </div>               
               </div>
          </section>
     </div>
  )
}

export default FeaturedProducts