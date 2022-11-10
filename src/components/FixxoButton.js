import React from 'react'
import { NavLink } from 'react-router-dom'

const FixxoButton = ({label, color, to}) => {
  return (
    <div>
      <button className={`fixxo-button button-${color}`}>
        <NavLink className='_NavLink' to={to}>{label}</NavLink>
      </button>
    </div>
  )
}

export default FixxoButton