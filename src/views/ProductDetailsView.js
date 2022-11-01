import React from 'react'
import { useParams } from 'react-router-dom'
import NavigationSection from '../sections/NavigationSection'
import FooterSection from '../sections/FooterSection'


const ProductDetailsView = () => {

     const params = useParams()

  return (
     <>
          <NavigationSection/>
               <div className='container mt-10'>
                    <h1>{params.id}</h1>
               </div>               
          <FooterSection/>
    </>   
  )
}

export default ProductDetailsView