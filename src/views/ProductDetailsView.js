import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import MainNavigation from '../sections/MainNavigation'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetails from '../sections/ProductDetails'
import FooterSection from '../sections/Footer'

import { useProductContext } from '../contexts/ProductContext'


const ProductDetailsView = () => {

     window.top.document.title = 'Fixxo | Product'
     
     const { params } = useParams()
     
     // console.log('Content of "params": ' + params);  
     
     
     const {product, getProduct} = useProductContext()
     
     useEffect (() => {
          getProduct(params)
     }, [])


  return (
     <>
          <MainNavigation/>
          <Breadcrumb currentPage={product.name}/>
          <ProductDetails item={product}/>
              
          <FooterSection/>
    </>   
  )
}

export default ProductDetailsView