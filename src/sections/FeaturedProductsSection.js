import React from 'react'
import ProductCard from '../components/ProductCard'

const FeaturedProducts = () => {
  return (
     <div>
          <section className="__featured-products">
               <div className='container'>
                    <h3>Featured Products</h3>
                    <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4'>
                         <ProductCard orientation='vertical'/>
                         <ProductCard orientation='vertical'/>
                         <ProductCard orientation='vertical'/>
                         <ProductCard orientation='vertical'/>
                         <ProductCard orientation='vertical'/>
                         <ProductCard orientation='vertical'/>
                         <ProductCard orientation='vertical'/>
                         <ProductCard orientation='vertical'/>
                    </div>
               </div>
          </section>
                    {/* <section className="__featured-products">
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
          </section> */}
     </div>
  )
}

export default FeaturedProducts