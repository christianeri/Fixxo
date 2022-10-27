import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({orientation, id}) => {

     let horizontal
     let vertical

     const cardOrientation = (orientation) => {
          switch (orientation) {
               case 'horizontal': {
                    horizontal = 'horizontal'
                    vertical = ''
               }
               case 'vertical': {
                    horizontal = ''
                    vertical = 'vertical';
               }
               break;
          }
     }
     cardOrientation(orientation)

  return (
<>
     <div className={`card ${horizontal}-card ${vertical}-card`} id={id}>
          <div className='__card-img'>
               <img src='...'/>
          </div>               
          <div className='__card-overlay'></div>
          <ul className='__card-overlay-menu'>
               <li>
                    <NavLink>
                         <button className="__navbar-button" id="search">
                              <i className="fa-regular fa-magnifying-glass"></i>
                              <div className="__navbar-button-badge"></div>
                         </button>
                    </NavLink>
               </li>
               <li>
                    <NavLink>
                         <button className="__navbar-button" id="search">
                              <i className="fa-regular fa-magnifying-glass"></i>
                              <div className="__navbar-button-badge"></div>
                         </button>
                    </NavLink>
               </li>
               <li>
                    <NavLink>
                         <button className="__navbar-button" id="search">
                              <i className="fa-regular fa-magnifying-glass"></i>
                              <div className="__navbar-button-badge"></div>
                         </button>
                    </NavLink>
               </li>
          </ul>
          <button className='__fixxo-button __button-theme'>quick view</button>
          <div className="__card-body">
               <h5 className='__card-title' id="product-category">category</h5>
               <h4 id="product-title">modern black blouse</h4>

               <div iv className="__card-rating" id="product-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
               </div>
               <span>
                    <h3 className="__card-previous-price">
                    $35.00</h3>

                    <h3 className="__card-current-price">
                    $30.00
                    </h3>
               </span>
          </div>
     </div>

     <div className={`${horizontal}-card ${vertical}-card`} id={id}>

          <div className='__card-img'>
               <img src='...'/>
          </div>   

          <div className="__card-body">
               <h5 className='card-title' id="product-category">category</h5>
               <h4 id="product-title">modern black blouse</h4>

               <div iv className="__card-rating" id="product-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
               </div>               
               <span>
                    <h3 className="__card-previous-price">
                    $35.00</h3>

                    <h3 className="__card-current-price">
                    $30.00
                    </h3>
               </span>
          </div>

     </div> 
</>
  )
}

export default ProductCard