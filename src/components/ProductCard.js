import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({orientation, id}) => {

     // let horizontal
     // let vertical

     // const cardOrientation = (orientation) => {
     //      switch (orientation) {
     //           case 'horizontal': 
     //                horizontal = 'horizontal'
     //                vertical = 'hide'
               
     //           case 'vertical': 
     //                horizontal = 'hide'
     //                vertical = 'vertical';
               
     //           break;
     //           default:
     //      }
     // }
     // cardOrientation(orientation)

  return (

     <div className='card'>
          <div className={`${orientation}-card`} id={id}>
               <div className='card-img'>
                    <img src='...'/>
               </div>               
               <div className='card-overlay'></div>
               <ul className='card-overlay-menu'>
                    <li>
                         <NavLink>
                              <button className="__navbar-button" id="search">
                                   <i class="fa-regular fa-heart"></i>        
                              </button>
                         </NavLink>
                    </li>
                    <li>
                         <NavLink>
                              <button className="__navbar-button" id="search">
                                   <i class="fa-regular fa-code-compare"></i>
                              </button>
                         </NavLink>
                    </li>
                    <li>
                         <NavLink>
                              <button className="__navbar-button" id="search">
                                   <i class="fa-regular fa-bag-shopping"></i>  
                              </button>
                         </NavLink>
                    </li>
               </ul>
               <button className='fixxo-button button-theme'>quick view</button>
               
               <div className="card-body">
                    <h5 className='card-title' id="product-category">category</h5>
                    <h4 id="product-title">modern black blouse</h4>

                    <div iv className="card-rating" id="product-rating">
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                    </div>
                    <span>
                         <h3 className="card-previous-price">
                         $35.00</h3>

                         <h3 className="card-current-price">
                         $30.00
                         </h3>
                    </span>
               </div>
          </div>
     </div>
  )
}

export default ProductCard