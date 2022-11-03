import React from 'react'
import InfoCard from '../components/InfoCard'

const OurSpeciality = () => {
  return (
    <div>
          <section className='customer-info-showcase customer-info'>
                <div className='section-title'>
                      <h3>Our Speciality</h3>
                </div>
                <div className='container-wide'>
                      <InfoCard title='Track Your Order'/>
                      <InfoCard title='Make a Return'/>
                      <InfoCard title='Request a Price Adjustment'/>                      
                </div>
          </section>
    </div>
  )
}

export default OurSpeciality