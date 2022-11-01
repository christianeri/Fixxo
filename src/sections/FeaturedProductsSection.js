import React from 'react'
import ProductCard from '../components/ProductCard'

const FeaturedProductsSection = ({title, products, orientation}) => {
  
     return (
     <>
          <section className="__featured-products">
               <div className='container'>

                    <h3>{title}</h3>
                    <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4'>
                         {
                              products.map(product => <ProductCard key={product.id} orientation='vertical' item={product}/>)
                         }
                    </div>

               </div>
          </section>
     </>
  )
}

export default FeaturedProductsSection