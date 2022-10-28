import React from 'react'
import ProductCard from '../components/ProductCard'

const ShowcaseColumns = () => {
  return (
    <div>
          <section className='__showcase-columns'>
               <div className='container'>
                    <div className='__column-left'>
                         <h4>Latest Products</h4>
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>
                    </div>
                    <div className='__column-center'>
                         <h4>Best Selling Products</h4>
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>
                    </div>
                    <div className='__column-right'>
                         <h4>Top Rated Products</h4>
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>   
                         <ProductCard orientation='horizontal'/>
                    </div>
               </div>
          </section>
    </div>
  )
}

export default ShowcaseColumns