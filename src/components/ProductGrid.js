import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = ({title, sectionName, products}) => {
  return (
     <>
     <section className={sectionName}>     
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

export default ProductGrid