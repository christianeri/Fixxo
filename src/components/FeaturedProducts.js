import React from 'react'
import CardTall from './CardTall'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  return (
     <div>
          <section className="__featured-products">
               <div className='container'>
                    <ProductCard orientation='vertical'/>

                    {/* <CardTall/>
                    <CardTall/>
                    <CardTall/>
                    <CardTall/> */}
               </div>
               <div className='container'>
                    <ProductCard orientation='vertical'/>

                    {/* <CardTall/>
                    <CardTall/>
                    <CardTall/>
                    <CardTall/> */}
               </div>
          </section>
     </div>
  )
}

export default FeaturedProducts