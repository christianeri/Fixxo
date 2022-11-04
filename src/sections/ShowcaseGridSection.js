import React from 'react'
import ProductCard from '../components/ProductCard'
import FixxoButton from '../components/FixxoButton'

const ShowcaseGrid = ({products}) => {
  return (
 
     <section className='showcase-grid'>
          <div className='container-wide'>
               <div>
                    <div className='showcase-container-1x1'>                   
                         <div className='showcase-textbox'>
                              <h2>2 FOR USD $29</h2>
                              <FixxoButton label='flash sale' color='light'/>
                         </div>
                    </div>
               </div>
               <div className='d-flex justify-content-start'>
                    <div className='showcase-container-4x4'>
                         <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-0'>
                              {
                                   products.map(product => <ProductCard key={product.id} orientation='vertical' item={product}/>)
                              }
                         </div>
                    </div>
               </div>
          </div>
          <div className='container-wide'>
               <div className='d-flex justify-content-end'>
                    <div className='showcase-container-4x4'>                                       
                         <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-0'>
                              {
                                   products.map(product => <ProductCard key={product.id} orientation='vertical' item={product}/>)
                              }
                         </div>            
                    </div>
               </div>
               <div className='d-flex justify-content-end'>
                    <div className='showcase-container-1x1'>
                         <div className='showcase-textbox'>
                              <h2>2 FOR USD $29</h2>
                              <FixxoButton label='flash sale' color='light'/>
                         </div>
                    </div>
               </div>
          </div>
     </section>

  )
}

export default ShowcaseGrid
