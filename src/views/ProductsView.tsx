
  import React, { useEffect } from 'react'

  import MainNavigation from '../sections/MainNavigation'
  import Breadcrumb from '../components/Breadcrumb'
  import Section from '../components/Section'
  import ProductCardGrid from '../components/ProductCardGrid'
  import Footer from '../sections/Footer'


const ProductsView: React.FC = () => {

     useEffect(() => {
          document.title = "Fixxo | All products"
       }, []);

  return (
    <>
     <MainNavigation/>
     <Breadcrumb currentPage='Products'/>
     <Section title='All Products' body={<ProductCardGrid orientation='vertical'/>} container='container' breakSM="1" breakMD="2" breakLG="4" breakXL="4"/>
     <Footer/>
    </>
  )
}

export default ProductsView