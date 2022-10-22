import React from 'react'
import InfoBox from './InfoBox'

const CustomerInformation = () => {
  return (
    <div>
          <section className='__customer-information'>
               <div className='container'>
                    <div className='__infobox'>
                         
                              <a href="">
                                   <button className="__navbar-button" id="share">
                                        <i class="fa-regular fa-headset"></i>
                                   </button>                              
                                   <h3>customer support</h3>
                                   <p>Village did removed enjoyed explain talking.</p>
                              </a>
                         
                    </div>
                    <div className='__infobox'>
                         
                              <a href="">
                                   <button className="__navbar-button" id="share">
                                        <i class="fa-regular fa-credit-card"></i>
                                   </button>                              
                                   <h3>secure payment</h3>
                                   <p>Village did removed enjoyed explain talking.</p>
                              </a>
                         
                    </div>
                    <div className='__infobox'>
                         
                              <a href="">
                                   <button className="__navbar-button" id="share">
                                        <i class="fa-solid fa-person-carry-box"></i>
                                   </button>                              
                                   <h3>free home delivery</h3>
                                   <p>Village did removed enjoyed explain talking.</p>
                              </a>
                         
                    </div>
                    <div className='__infobox'>
                         
                              <a href="">
                                   <button className="__navbar-button" id="share">
                                        <i class="fa-solid fa-rotate-left"></i>
                                   </button>                              
                                   <h3>30 day returns</h3>
                                   <p>Village did removed enjoyed explain talking.</p>
                              </a>
                         
                    </div>
               </div>
          </section> 
    </div>
  )
}

export default CustomerInformation