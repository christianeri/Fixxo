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

  return (
     <nav className={colorWhite ? '__top-navbar __bg-white' : '__top-navbar rd'}>          
          <div className='__container-wide'>
               <div className="__left bb">
                    <NavLink to='/' end>
                         <h1 className="__logo">Fixxo.</h1>
                    </NavLink>                    
               </div>
               <div className='__center gr'>
                    <NavLink to='/' end>Home</NavLink>
                    <NavLink to='/categories' end>Categories</NavLink>
                    <NavLink to='/products' end>Products</NavLink>
                    <NavLink to='/contact' end>Contact</NavLink>
               </div>
               <div className="__right bl">
                    <NavbarButton link='/search' icon='fa-regular fa-magnifying-glass'/>
                    <NavbarButton link='/compare' icon='fa-solid fa-retweet'/>
                    <NavbarButton link='/wishlist' icon='fa-regular fa-heart'/>
                    <NavbarButton link='/shoppingcart' icon='fa-regular fa-bag-shopping' quantity='4'/>
               </div>
          </div>
     </nav>
  )
}

export default NavigationSection