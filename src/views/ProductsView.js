import React, { useContext } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'
import { ProductContext } from '../contexts/contexts'
import Footer from '../sections/Footer'
import MainNavigation from '../sections/MainNavigation'

const ProductsView = () => {

    window.top.document.title = 'Fixxo | Products'
    
    const productContext = useContext(ProductContext)

  return (
    <>
     <MainNavigation/>
     <Breadcrumb currentPage='Products'/>
     <FeaturedProductsSection title='All Products' sectionName='all-products' items={productContext.allProducts}/>
     <Footer/>
    </>
  )
}

export default ProductsView