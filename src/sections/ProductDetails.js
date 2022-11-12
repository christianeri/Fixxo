
import FixxoButton from '../components/FixxoButton'
import ProductCard from '../components/ProductCard'

const ProductDetails = ({item = []}) => {

     const label = {...item}
     console.log('hej' + item);

     window.top.document.title = {item}

  return (
    <>
          <section className='product-details'>
               <div className='container'>
               {/* <ProductCard orientation='vertical' item={items}/> */}

                    <div className='row'>
                         <div className='col-6'>
                              <div className='row g-0'>
                                   <div className='col-12 p-2'>
                                   <img src={item.imageName} alt={item.name} className='img-lg'/>

                                   </div>
                                   <div className='row g-0'>
                                        <div className='col-4 p-2'>
                                        <img src={item.imageName} alt={item.name} className='img-sm'/>

                                        </div>
                                        <div className='col-4 p-2'>
                                        <img src={item.imageName} alt={item.name} className='img-sm'/>

                                        </div>
                                        <div className='col-4 p-2'>
                                        <img src={item.imageName} alt={item.name} className='img-sm'/>

                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='col-6 pt-2 right'>
                              <div>
                                   <h3>{item.name}</h3>
                                   <span>
                                        <span>SKU: 12345670 </span><span>BRAND: The Northland</span>
                                   </span>
                                   <div className="card-rating py-3" id="product-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                   </div>
                                   <h3 className="card-price">€{item.price}</h3>
                              
                                   <p className='py-3'>
                                        Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. 
                                        Unwilling departure education is be dashwoods or an. 
                                        Use off agreeable law unwilling sir deficient curiosity instantly. (read more)
                                   </p>
                              </div>

                              <div>
                                   <div className='row my-4'>
                                        <div className='col-2 d-flex align-items-center'><h4>Size:</h4></div>                                   
                                        <div className='col-10 d-flex gap-2 g-0'>
                                             <div className='size-value'>S</div>
                                             <div className='size-value'>M</div>
                                             <div className='size-value'>L</div>
                                             <div className='size-value'>XL</div>
                                        </div>
                                   </div>
                                   <div className='row my-4'>
                                        <div className='col-2 d-flex align-items-center'><h4>Color:</h4></div>                                   
                                        <div className='col-10 d-flex gap-2 g-0'>
                                             <div className='color-value'>Choose an Option</div>
                                        </div>
                                   </div>
                                   <div className='row my-4'>
                                        <div className='col-2 d-flex align-items-center'><h4>Qty:</h4></div>                                   
                                        <div className='col-10 d-flex gap-4 g-0'>
                                             <div className='d-flex quantity-value'>
                                                  <div className=''>-</div>
                                                  <div className='center'>1</div>
                                                  <div className=''>+</div>
                                             </div>
                                             <button className='fixxo-button button-theme'>Add to Cart</button>
                                        </div>
                                   </div>
                                   <div className='row my-4'>
                                        <div className='col-2 d-flex align-items-center'><h4>Share:</h4></div>                                   
                                        <div className='col-10 d-flex gap-2 g-0'>
                                             <a href="https://facebook.com" target="_blank">
                                                  <button className='round-button'><i className="fa-brands fa-facebook-f"></i></button>                                                  
                                             </a>
                                             <a href="https://instagram.com" target="_blank">
                                                  <button className='round-button'><i className="fa-brands fa-instagram"></i></button>
                                             </a>
                                             <a href="https://twitter.com" target="_blank">
                                                  <button className='round-button'><i className="fa-brands fa-twitter"></i></button>
                                             </a>
                                             <a href="https://google.com" target="_blank">
                                                  <button className='round-button'><i className="fa-brands fa-google"></i></button>
                                             </a>
                                             <a href="https://linkedin.com" target="_blank">
                                                  <button className='round-button'><i className="fa-brands fa-linkedin"></i></button>
                                             </a>                                  
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>               
          </section>
    </>
  )
}

export default ProductDetails