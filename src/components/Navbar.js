import React, { useState } from 'react'

     // change color of navbar when scrolling 
     const Navbar = () => {
          let [color, setColor] = useState(false)
          let changeColor = () => {
               if (window.scrollY >= 880) {
                    setColor(true) 
               } else {
                    setColor(false)
               }
          }
          window.addEventListener('scroll', changeColor)
          console.log(window.scrollY);

     return (
          <nav className={color ? '__top-navbar __bg-white' : '__top-navbar'}>          
               <div className='__container'>
                    <div className="__left">
                         <h1 className="__logo">Fixxo.</h1>
                    </div>
                    <div className="__center">
                         <a href="">Home</a>
                         <a href="">Categories</a>
                         <a href="">Products</a>
                         <a href="">Contacts</a>
                    </div>
                    <div className="__right">
                         <a href="">
                              <button className="__navbar-button" id="search">
                                   <i className="fa-regular fa-magnifying-glass"></i>
                                   <div className="__navbar-button-badge"></div>
                              </button>
                         </a>
                         <a href="">
                              <button className="__navbar-button" id="share">
                                   <i className="fa-solid fa-retweet"></i>
                                   <div className="__navbar-button-badge"></div>
                              </button>
                         </a>
                         <a href="">
                              <button className="__navbar-button" id="favorites">
                                   <i className="fa-regular fa-heart"></i>
                                   <div className="__navbar-button-badge"></div>
                              </button>
                         </a>
                         <a href="">
                              <button className="__navbar-button" id="shopping-cart">
                                   <i className="fa-regular fa-bag-shopping"></i>
                                   <div className="__navbar-button-badge"></div>
                              </button>
                         </a>
                    </div>
               </div>
          </nav>
     )
     }

     export default Navbar