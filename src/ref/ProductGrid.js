import React, { useState } from 'react'

const ProductGrid = (title, orientation, products) => {
  return (
     <>
          <h3>{title}</h3>
          <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4'>
               {
                    products.map(product => <ProductCard key={product.id} orientation={orientation} item={product}/>)
               }
          </div>
     </>
  )
}

export default ProductGrid