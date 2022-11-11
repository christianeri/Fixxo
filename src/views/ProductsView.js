import React, { useEffect, useContext } from 'react'

import MainNavigation from '../sections/MainNavigation'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../sections/Footer'
import ProductCard from '../components/ProductCard'
import ProductCardGrid from '../components/ProductCardGrid'
import Section from '../components/Section'

import { ProductContext } from '../contexts/ProductContext'



const ProductsView = () => {

    window.top.document.title = 'Fixxo | All Products'
    
    // const {productCollection, getProductCollection} = useContext(ProductContext)

    // useEffect (() => {
    //   getProductCollection(8)
    // }, [])

  return (
    <>
     <MainNavigation/>
     <Breadcrumb currentPage='Products'/>
     {/* <FeaturedProducts title='All Products' sectionName='all-products' items={productContext.allProducts}/> */}
     {/* <ProductCardGrid orientation='vertical' amount='4'/> */}
     <Section title='All Products' body={<ProductCardGrid orientation='vertical' amount='8'/>} container='container' brpSM="0" brpMD="4" brpLG="8"/>
     
     <Footer/>
    </>
  )
}

export default ProductsView