import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({currentPage}) => {
  return (
     <div className='container'>
          <div className='breadcrumb'>
               <ul>
                    <li>
                         <NavLink to="/" end>Home /&nbsp;</NavLink> 
                    </li>
                    <li className='active'>
                         <NavLink>{currentPage}</NavLink>
                    </li>
               </ul>
          </div>
     </div>
  )
}

export default Breadcrumb