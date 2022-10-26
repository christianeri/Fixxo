import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({view}) => {
  return (
     <div className='container'>
          <div className='breadcrumb bb'>
               <ul>
                    <li>
                         <NavLink to="/" end>Home /&nbsp;</NavLink> 
                    </li>
                    <li className='active'>
                         <NavLink>{view}</NavLink>
                    </li>
               </ul>
          </div>
     </div>
  )
}

export default Breadcrumb