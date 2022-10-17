import React from 'react'
import InfoCard from './InfoCard'

const OurSpeciality = () => {
  return (
    <div>
          <section className='__our-speciality'>
                <div className='__section-title br'>
                          <h3>Our Speciality</h3>
                </div>
                <div className='__container br'>
                      <InfoCard title='Track Your Order'/>
                      <InfoCard title='Make a Return'/>
                      <InfoCard title='Request a Price Adjustment'/>                      
                </div>
          </section>
    </div>
  )
}

export default OurSpeciality