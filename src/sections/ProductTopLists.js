import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductTopLists = ({items = []}) => {
  return (
          <section className='product-top-lists'>
               <div className='container'>
                    <div className='column-left br'>
                         <h4>Best Selling Products</h4>
                         {
                              items.map(product => <ProductCard key={product.articleNumber} orientation='vertical' item={product}/>)
                         }
                    </div>
                    <div className='column-center br'>
                         <h4>Best Selling Products</h4>
                         {
                         items.map(product => <ProductCard key={product.articleNumber} orientation='vertical' item={product}/>)
                         }
                    </div>
                    <div className='column-right br'>
                         <h4>Top Rated Products</h4>
                         {
                         items.map(product => <ProductCard key={product.articleNumber} orientation='vertical' item={product}/>)
                         }
                    </div>
               </div>
          </section>
  )
}

export default ProductTopLists