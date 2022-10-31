import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const FeaturedProductsSection = ({title, orientation}) => {

     const [products, setProducts] = useState([    
          {    id: 1, 
               productName: "modern Black Blouse 1", 
               category: "Women",
               price: "$35",
               rating: 5,
               imgURL: "Product-001.png"
          },
          {    id: 2, 
               productName: "modern Black Blouse 2 ", 
               category: "Women",
               price: "$35",
               rating: 5,
               imgURL: "Product-001.png"
          },
          {    id: 3, 
               productName: "modern Black Blouse 3 ", 
               category: "Women",
               price: "$35",
               rating: 5,
               imgURL: "Product-001.png"
          },
          {    id: 4, 
               productName: "modern Black Blouse 4", 
               category: "Women",
               price: "$35",
               rating: 5,
               imgURL: "Product-001.png"
          }
     ])
  
     return (
     <>
          <section className="__featured-products">
               <div className='container'>

                    <h3>{title}</h3>
                    <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4'>
                         {
                              products.map(product => <ProductCard orientation='vertical' productName={products.productName}/>)
                         }
                    </div>

               </div>
          </section>
     </>
  )
}

export default FeaturedProductsSection