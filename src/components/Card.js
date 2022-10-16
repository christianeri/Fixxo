import React from 'react'

const Card = () => {
  return (
    <div>
          <div className="card">
               <img src='...' className='card-img-top'/>
               <div className="card-body border">
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
    </div>
  )
}

export default Card