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
     <nav className={colorWhite ? 'top-navbar bg-white' : 'top-navbar'}>          
          <div className='container-wide'>
               <div className="left bl">
                    <NavLink className='._NavLink' to='/' end>
                         <h1 className="logo">Fixxo.</h1>
                    </NavLink>                    
               </div>
               <div  className='center bl'>
                         <NavLink className='_NavLink' to='/' end>
                              <h4>Home</h4>                              
                         </NavLink>
                         <NavLink className='_NavLink' to='/categories' end>
                              <h4>Categories</h4>                              
                         </NavLink>
                         <NavLink className='_NavLink' to='/products'>
                              <h4>Products</h4>                              
                         </NavLink>
                         <NavLink className='_NavLink' to='/contact' end>
                              <h4>Contact</h4>                              
                         </NavLink>
               </div>
               <ul className={!showMenu ? "mobile-menu invisible" : "mobile-menu"}>
                    <li>

                         <NavLink className='_NavLink' to='/'>
                              <h4>Home</h4>
                         </NavLink>
                    </li>
                    <li>
                         <NavLink className='_NavLink' to='/categories' end>
                              <h4>Categories</h4>
                         </NavLink>
                    </li>
                    <li>

                         <NavLink className='_NavLink' to='/products' end>
                              <h4>Products</h4>
                         </NavLink>
                    </li>
                    <li>

                         <NavLink className='_NavLink' to='/contact'>
                              <h4>Contact</h4>
                         </NavLink>
                    </li>
               </ul>

               <div className="right bl">
                    <NavbarButton to='/search' icon='fa-regular fa-magnifying-glass'/>
                    <NavbarButton to='/compare' icon='fa-solid fa-retweet' hideOnMobile={true}/>
                    <NavbarButton to='/wishlist' icon='fa-regular fa-heart'hideOnMobile={true}/>

                    <button className="navbar-button">
                         <i className='fa-regular fa-shopping-cart'></i>
                         <div className="navbar-button-badge">X</div>
                    </button>

                    <button onClick={toggleMenu} className="navbar-button triple-bar-button"><i className='fa-regular fa-bars'></i>
                    </button>
               </div>
          </div>
     </nav>
  )
}

export default NavigationSection