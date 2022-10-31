import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarButton = ({to, icon, quantity, hideOnMobile}) => {
  return (
     <NavLink to={to} className={`${hideOnMobile ? "d-none d-md-flex" : ""}`} end>
          <button className="navbar-button">
               <i className={icon}></i>
               <div className="navbar-button-badge">{quantity}</div>
          </button>
     </NavLink>
  )
}

export default NavbarButton