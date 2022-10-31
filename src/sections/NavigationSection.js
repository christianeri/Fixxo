import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavbarButton from '../components/NavbarButton'

     // change color of navbar when scrolling 
     const NavigationSection = () => {

          let [colorWhite, setColorWhite] = useState(false)
          let changeColorWhite = () => {
               if (window.scrollY >= 1) {
                    setColorWhite(true) 
               } else {
                    setColorWhite(false)
               }
          }
          window.addEventListener('scroll', changeColorWhite)
          // console.log(window.scrollY);

          const [showMenu, setShowMenu] = useState(false)
          const toggleMenu = () => {
               setShowMenu(!showMenu)
          }

  return (
     <nav className={colorWhite ? '__top-navbar __bg-white' : '__top-navbar rd'}>          
          <div className='__container-wide gr'>
               <div className="__left bl">
                    <NavLink to='/' end>
                         <h1 className="__logo">Fixxo.</h1>
                    </NavLink>                    
               </div>
               <div className='__center'>
                    <NavLink to='/' end>Home</NavLink>
                    <NavLink to='/categories' end>Categories</NavLink>
                    <NavLink to='/products' end>Products</NavLink>
                    <NavLink to='/contact' end>Contact</NavLink>
               </div>
               <div className="__right bl">
                    <NavbarButton to='/search' icon='fa-regular fa-magnifying-glass'/>
                    <NavbarButton to='/compare' icon='fa-solid fa-retweet' hideOnMobile={true}/>
                    <NavbarButton to='/wishlist' icon='fa-regular fa-heart'hideOnMobile={true}/>
                    <NavbarButton to='/shoppingcart' icon='fa-regular fa-bag-shopping' quantity='4'/>
                    <button onClick={toggleMenu} className="navbar-button triple-bar-button"><i className='fa-regular fa-bars'></i>
                    </button>
               </div>
               <div className={!showMenu ? "mobile-menu invisible" : "mobile-menu bl"}>
                    <NavLink to='/' end>Home</NavLink>
                    <NavLink to='/categories' end>Categories</NavLink>
                    <NavLink to='/products' end>Products</NavLink>
                    <NavLink to='/contact' end>Contact</NavLink>
               </div>
          </div>
     </nav>
  )
}

export default NavigationSection