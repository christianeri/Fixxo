import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({orientation, item}) => {


     const addToWishlist = (event) => {
          console.log('Added to Wishlist')
     }
     const addToCompare = (event) => {
          console.log('Added to Compare list')
     }
     const addToShoppingCart = (event) => {
          console.log('Added to Shopping Cart')
     }

     

     


  return (

     <div className='card'>
          <div className={`${orientation}-card`}>
               <div className='card-img'>
                    <img src={item.imgURL} alt={item.productName}/>
               </div>               
               <div className='card-overlay'></div>
               <ul className='card-overlay-menu'>
                    <li>
                         <button className="navbar-button" onClick={addToWishlist}>
                              <i className="fa-regular fa-heart"></i>        
                         </button>
                    </li>
                    <li>
                         <button className="navbar-button" onClick={addToCompare}>
                              <i className="fa-regular fa-code-compare"></i>
                         </button>
                    </li>
                    <li>
                         <button className="navbar-button" onClick={addToShoppingCart}>
                              <i className="fa-regular fa-bag-shopping"></i>  
                         </button>
                    </li>
               </ul>
               <NavLink to={`/products/${item.id}`}>
                    <button className='fixxo-button button-theme'>quick view</button>
               </NavLink>
               
               <div className="card-body">
                    <h5 className='card-title' id="product-category">{item.category}</h5>
                    <h4 id="product-title">{item.productName}</h4>

                    <div className="card-rating" id="product-rating">
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                    </div>
                    <span>
                         <h3 className="card-previous-price">
                         {item.previousPrice}
                         </h3>

                         <h3 className="card-current-price">
                         {item.currentPrice}
                         </h3>
                    </span>
               </div>
          </div>
     </div>
  )
}

export default ProductCard