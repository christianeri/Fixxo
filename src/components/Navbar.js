import React, { useState } from 'react'

     // change color of navbar when scrolling 
     const Navbar = () => {
          let [colorWhite, setColorWhite] = useState(false)
          let changeColorWhite = () => {
               if (window.scrollY >= 200) {
                    setColorWhite(true) 
               } else {
                    setColorWhite(false)
               }
          }
          window.addEventListener('scroll', changeColorWhite)
          console.log(window.scrollY);

     return (
          <nav className={colorWhite ? '__top-navbar __bg-white' : '__top-navbar'}>          
               <div className='__container-wide'>
                    <div className="__left">
                         <h1 className="__logo">Fixxo.</h1>
                    </div>
                    <div className='__center'>
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