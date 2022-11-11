import React, { useContext, useEffect } from 'react'

import MainNavigation from '../sections/MainNavigation'
import HeroSection from '../sections/HeroSection';
import SplitBanner from '../sections/BannerSplit';
import FeaturedProducts from '../sections/FeaturedProducts';
import DoubleBanner from '../sections/BannerDouble';
import CustomerInfoShowcase from '../sections/CustomerInfoShowcase';
import ProductPromoShowcase from '../sections/ProductPromoShowcase';
import SingleBanner from '../sections/BannerSingle';
import ProductToplistShowcase from '../sections/ProductToplistShowcase';
import CustomerInfoMenu from '../sections/CustomerInfoMenu';
import Footer from '../sections/Footer';

// import {ProductContext} from '../contexts/contexts'
// import { ProductProvider } from '../contexts/ProductContext';

import { useProductContext } from '../contexts/ProductContext';
import ProductCardGrid from '../components/ProductCardGrid';



const HomeView = () => {

  window.top.document.title = 'Fixxo'

  // const productContext = useContext(ProductContext);

  const {featuredProducts, getFeaturedProducts, showcaseProducts, getShowcaseProducts, toplistProducts, getToplistProducts} = useProductContext()

  useEffect (() => {
    getFeaturedProducts(8)
  }, [])

  useEffect (() => {
    getShowcaseProducts(4)
  }, [])

  useEffect (() => {
    getToplistProducts(3)
  }, [])


  return (
    <>
      <MainNavigation/>
      <HeroSection/>
      <SplitBanner/>
      {/* <FeaturedProducts title='Featured Products' sectionName='featured-products' items={productContext.featuredProducts}/> */}
      <FeaturedProducts title='Featured Products' sectionName='featured-products' items={featuredProducts}/>
      <DoubleBanner/>
      <CustomerInfoShowcase/>
      {/* <ProductPromoShowcase items={productContext.productShowcaseItems}/> */}
      <ProductPromoShowcase items={showcaseProducts}/>
      <SingleBanner/>
      {/* <ProductToplistShowcase items={productContext.productShowcaseItems}/> */}
      <ProductToplistShowcase items={toplistProducts}/>
      <CustomerInfoMenu/>
      <Footer/>     
    </>
  )
}

export default HomeView