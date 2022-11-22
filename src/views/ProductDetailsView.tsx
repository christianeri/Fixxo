
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import MainNavigation from '../sections/MainNavigation'
import ProductDetails from '../sections/ProductDetails'
import Section from '../components/Section'
import ProductCardGrid from '../components/ProductCardGrid'
import Footer from '../sections/Footer'

import { ProductContextType, ProductContext } from '../contexts/ProductContext';
import { IProduct } from '../models/productModel'


interface Props {
     product: IProduct
}

const ProductDetailsView: React.FC<Props> = (Props) => {

     useEffect(() => {
          document.title = "Fixxo | Product"
       }, []);
     
     const {params} = useParams()
     
     // console.log('Content of "params": ' + params);  
     
     const {getProduct} = React.useContext(ProductContext) as ProductContextType
     
     useEffect (() => {
          getProduct(params)
     }, [])


  return (
     <>
          <MainNavigation/>
          <ProductDetails item={product}/>
          <Section container='container' classHeader='d-flex justify-content-start py-0' title='Related Products' body={<ProductCardGrid orientation='vertical' amount={4}/>} breakSM="1" breakMD="2" breakLG="4" breakXL="4"/>
          <Footer/>
    </>   
  )
}

export default ProductDetailsView