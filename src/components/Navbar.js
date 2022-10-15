import React from 'react'

const Navbar = () => {
  return (
     <nav className="top-navbar">          
          <div className='container-xxl'>
               <div className="left">
                    <h1 className="logo">Fixxo.</h1>
               </div>
               <div className="center">
                    <a href="">Home</a>
                    <a href="">Categories</a>
                    <a href="">Products</a>
                    <a href="">Contacts</a>
               </div>
               <div className="right">
                    <a href="">
                         <button className="navbar-button" id="search">
                              <i className="fa-regular fa-magnifying-glass"></i>
                              <div className="navbar-button-badge"></div>
                         </button>
                    </a>
                    <a href="">
                         <button className="navbar-button" id="share">
                              <i className="fa-solid fa-retweet"></i>
                              <div className="navbar-button-badge"></div>
                         </button>
                    </a>
                    <a href="">
                         <button className="navbar-button" id="favorites">
                              <i className="fa-regular fa-heart"></i>
                              <div className="navbar-button-badge"></div>
                         </button>
                    </a>
                    <a href="">
                         <button className="navbar-button" id="shopping-cart">
                              <i className="fa-regular fa-bag-shopping"></i>
                              <div className="navbar-button-badge"></div>
                         </button>
                    </a>
               </div>
          </div>
     </nav>
  )
}

export default Navbar