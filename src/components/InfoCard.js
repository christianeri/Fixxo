import React from 'react'

const InfoCard = ({title}) => {
  return (
      <div>
            <div className='__info-card'>
                  <div className='__left'>
                        <div className='__textbox'>
                              <h3>{title}</h3>                              
                              <a href=''>Get Started<i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                  </div>
                  <div className='__right'>
                  </div>               
            </div>
      </div>
  )
}

export default InfoCard