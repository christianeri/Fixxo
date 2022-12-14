import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ShoppingCartItem = ({item}) => {

     const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()

  return (

     <div className='shoppingcart-item'>
          <img src={item.product.imageName} alt={item.product.name}/>
          <div className='center px-3 g-0'>
               <div className='top'>
                    <div className='item-info-name'><h4>{item.product.name}</h4></div>
               </div>
               <div className='bottom'>
                    <div className='item-quantity'>
                         <button onClick={() => incrementQuantity(item)}>+</button>
                         <div className='center d-flex justify-content-center align-items-center' data-testid="item.quantity">{item.quantity}</div>
                         <button onClick={() => decrementQuantity(item)}>-</button>  
                    </div>
                         <button onClick={() => removeItem(item.articleNumber)}>
                              <i className='fa-regular fa-trash'></i>
                         </button> 
               </div>
          </div>
          <div className='right d-flex justify-content-start align-items-center'>
               <h3>€{item.product.price * item.quantity}</h3>
          </div>
     </div>

  )
}

export default ShoppingCartItem