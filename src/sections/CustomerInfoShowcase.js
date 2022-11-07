import React from 'react'
import InfoCard from '../components/InfoCard'

const CustomerInfoShowcase = () => {
  return (
      <section className='customer-info-showcase'>
            <div className='container-wide'>
                  <h3 className='section-title'>Our Speciality</h3>
            </div>
            <div className='container-wide customer-info-container'>
                  <InfoCard title='Track Your Order'/>
                  <InfoCard title='Make a Return'/>
                  <InfoCard title='Request a Price Adjustment'/> 
            </div>
      </section>
  )
}

export default CustomerInfoShowcase