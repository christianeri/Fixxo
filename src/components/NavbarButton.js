import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarButton = ({link, icon, quantity}) => {
  return (
     <NavLink to={link} end>
          <button className="__navbar-button">
               <i className={icon}></i>
               <div className="__navbar-button-badge">{quantity}</div>
          </button>
     </NavLink>
  )
}

export default NavbarButton