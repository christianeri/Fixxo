import React from 'react'
import InfoBox from './InfoBox'

const CustomerInformation = () => {
  return (
    <div>
          <section className='__customer-information'>
               <div className='container'>
                    <div className='__infobox'>
                         <div>
                              <a href="">
                                   <button className="__navbar-button" id="share">
                                        <i class="fa-regular fa-headset"></i>
                                        <div className="__navbar-button-badge"></div>
                                   </button>
                              </a>
                              <h4>customer support</h4>
                              <p>Village did removed enjoyed explain talking.</p>
                         </div>
                    </div>
                    <div className='__infobox'>
                         <div>
                              <a href="">
                                   <button className="__navbar-button" id="share">
                                        <i class="fa-regular fa-credit-card"></i>
                                        <div className="__navbar-button-badge"></div>
                                   </button>
                              </a>
                              <h4>secure payment</h4>
                              <p>Village did removed enjoyed explain talking.</p>
                         </div>
                    </div>
                    <div className='__infobox'>
                         <div>
                              <a href="">
                                   <button className="__navbar-button" id="share">
                                        <i class="fa-solid fa-person-carry-box"></i>
                                        <div className="__navbar-button-badge"></div>
                                   </button>
                              </a>
                              <h4>free home delivery</h4>
                              <p>Village did removed enjoyed explain talking.</p>
                         </div>
                    </div>
                    <div className='__infobox'>
                         <div>
                              <a href="">
                                   <button className="__navbar-button" id="share">
                                        <i class="fa-solid fa-rotate-left"></i>
                                        <div className="__navbar-button-badge"></div>
                                   </button>
                              </a>
                              <h4>30 day returns</h4>
                              <p>Village did removed enjoyed explain talking.</p>
                         </div>
                    </div>
               </div>
          </section> 
    </div>
  )
}

export default CustomerInformation