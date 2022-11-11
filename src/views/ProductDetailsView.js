import React from 'react'
import { useParams } from 'react-router-dom'
import MainNavigation from '../sections/MainNavigation'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetails from '../sections/ProductDetails'
import FooterSection from '../sections/Footer'


const ProductDetailsView = () => {

     window.top.document.title = 'Fixxo | {params.id}'

     const params = useParams()

  return (
     <>
          <MainNavigation/>
          <Breadcrumb currentPage='Contact'/>
          {/* <ProductDetails/> */}
               {/* <div className='container mt-10'>
                    <h1>{params.id}</h1>
               </div>                */}
          <FooterSection/>
    </>   
  )
}

export default ProductDetailsView