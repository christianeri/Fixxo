import React from 'react'
import ProductCard from '../components/ProductCard'

const ShowcaseColumns = () => {
  return (
          <section className='showcase-columns'>
               <div className='container'>
                    <div className='column-left'>
                         <h4>Latest Products</h4>
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>
                    </div>
                    <div className='column-center'>
                         <h4>Best Selling Products</h4>
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>
                    </div>
                    <div className='column-right'>
                         <h4>Top Rated Products</h4>
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>
                    </div>
               </div>
          </section>
  )
}

export default ShowcaseColumns