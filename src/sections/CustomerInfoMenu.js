import React from 'react'
import InfoBox from '../components/InfoBox'

const CustomerInformation = () => {
  return (
     <section className='customer-info'>
          <div className='container'>
               <div className='infobox'>
                    
                    <a href="">
                         <button className="navbar-button" id="share">
                              <i className="fa-regular fa-headset"></i>
                         </button>                              
                         <h3>customer support</h3>
                         <p>Village did removed enjoyed explain talking.</p>
                    </a>
                    
               </div>
               <div className='infobox'>
                    
                    <a href="">
                         <button className="navbar-button" id="share">
                              <i className="fa-regular fa-credit-card"></i>
                         </button>                              
                         <h3>secure payment</h3>
                         <p>Village did removed enjoyed explain talking.</p>
                    </a>
                    
               </div>
               <div className='infobox'>
                    
                    <a href="">
                         <button className="navbar-button" id="share">
                              <i className="fa-solid fa-person-carry-box"></i>
                         </button>                              
                         <h3>free home delivery</h3>
                         <p>Village did removed enjoyed explain talking.</p>
                    </a>
                    
               </div>
               <div className='infobox'>
                    
                    <a href="">
                         <button className="navbar-button" id="share">
                              <i className="fa-solid fa-rotate-left"></i>
                         </button>                              
                         <h3>30 day returns</h3>
                         <p>Village did removed enjoyed explain talking.</p>
                    </a>
                    
               </div>
          </div>
     </section> 
  )
}

export default CustomerInformation