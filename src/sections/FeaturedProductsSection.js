import React from 'react'
import ProductCard from '../components/ProductCard'

const FeaturedProducts = () => {
  return (
     <div>
          <section className="__featured-products">
               <div className='container'>
                    <ProductCard orientation='vertical'/>
                    <ProductCard orientation='vertical'/>
                    <ProductCard orientation='vertical'/>
                    <ProductCard orientation='vertical'/>
               </div>
               <div className='container'>
                    <ProductCard orientation='vertical'/>
                    <ProductCard orientation='vertical'/>
                    <ProductCard orientation='vertical'/>
                    <ProductCard orientation='vertical'/>
               </div>
          </section>
     </div>
  )
}

export default FeaturedProducts