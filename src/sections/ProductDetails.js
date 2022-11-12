
import ProductCard from '../components/ProductCard'

const ProductDetails = ({items = []}) => {

  return (
    <>
          <section className='product-details'>
               <div className='container-wide'>
               <ProductCard orientation='vertical' item={items}/>
               </div>               
          </section>
    </>
  )
}

export default ProductDetails