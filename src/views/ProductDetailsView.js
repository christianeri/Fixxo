import React from 'react'
import { useParams } from 'react-router-dom'
import MainNavigation from '../sections/MainNavigation'
import FooterSection from '../sections/FooterSection'


const ProductDetailsView = () => {

     window.top.document.title = 'Fixxo | {params.id}'

     const params = useParams()

  return (
     <>
          <MainNavigation/>
               <div className='container mt-10'>
                    <h1>{params.id}</h1>
               </div>               
          <FooterSection/>
    </>   
  )
}

export default ProductDetailsView