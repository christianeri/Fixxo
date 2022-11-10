import React, { useContext } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FeaturedProducts from '../sections/FeaturedProducts'
import { ProductContext } from '../contexts/contexts'
import Footer from '../sections/Footer'
import MainNavigation from '../sections/MainNavigation'
import ProductCard from '../components/ProductCard'

const ProductsView = () => {

    window.top.document.title = 'Fixxo | All Products'
    
    const productContext = useContext(ProductContext)

  return (
    <>
     <MainNavigation/>
     <Breadcrumb currentPage='Products'/>
     <FeaturedProducts title='All Products' sectionName='all-products' items={productContext.allProducts}/>
     <Footer/>
    </>
  )
}

export default ProductsView