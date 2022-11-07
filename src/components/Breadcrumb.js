import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({currentPage}) => {
  return (
     <div className='container'>
          <div className='breadcrumb'>
               <ul>
                    <li>
                         <NavLink to="/" end>
                              <h4>Home /&nbsp;</h4>
                         </NavLink> 
                    </li>
                    <li>
                         <NavLink to="/" end>
                              <h4 className='active'>{currentPage}</h4>
                         </NavLink>
                    </li>
               </ul>
          </div>
     </div>
  )
}

export default Breadcrumb