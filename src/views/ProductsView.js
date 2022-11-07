import React, { useContext } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductGrid from '../components/ProductGrid'
import { ProductContext } from '../contexts/contexts'
import FooterSection from '../sections/FooterSection'
import NavigationSection from '../sections/NavigationSection'

const ProductsView = () => {

    window.top.document.title = 'Fixxo | Products'
    
    const productContext = useContext(ProductContext)

  return (
    <>
     <NavigationSection/>
     <Breadcrumb currentPage='Products'/>
     <ProductGrid title='All Products' sectionName='all-products' items={productContext.allProducts}/>
     <FooterSection/>
    </>
  )
}

export default ProductsView