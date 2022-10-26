import React from 'react'

const FixxoButton = ({label, color}) => {
  return (
    <div>
          <button className={`fixxo-button button-${color}`}>{label}</button>
    </div>
  )
}

export default FixxoButton