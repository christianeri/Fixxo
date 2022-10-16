import React from 'react'

const InformationCard = ({title}) => {
  return (
    <div>
          <div className='__information-card br'>
               <div className='__left br'>{title} get started</div>
               <div className='__right br'></div>               
          </div>
    </div>
  )
}

export default InformationCard