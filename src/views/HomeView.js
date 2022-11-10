import React, { useContext } from 'react'
import MainNavigation from '../sections/MainNavigation'

import HeroSection from '../sections/HeroSection';
import SplitBanner from '../sections/BannerSplit';
import FeaturedProductsSection from '../sections/FeaturedProductsSection';
import DoubleBanner from '../sections/BannerDouble';
import CustomerInfoShowcase from '../sections/CustomerInfoShowcase';
import ProductPromoShowcase from '../sections/ProductPromoShowcase';
import SingleBanner from '../sections/BannerSingle';
import ShowcaseColumns from '../sections/ProductTopListsSection';
import CustomerInfoMenu from '../sections/CustomerInfoMenu';

import Footer from '../sections/Footer';

import {ProductContext} from '../contexts/contexts'


const HomeView = () => {

  window.top.document.title = 'Fixxo'

  const productContext = useContext(ProductContext);

  return (
    <>
      <MainNavigation/>
      <HeroSection/>
      <SplitBanner/>
      {/* <FeaturedProductsSection title='Featured Products' sectionName='featured-products' items={productContext.featuredProducts}/> */}
      <DoubleBanner/>
      <CustomerInfoShowcase/>
      <ProductPromoShowcase items={productContext.productShowcaseItems}/>
      <SingleBanner/>
      {/* <ShowcaseColumns/> */}
      <CustomerInfoMenu/>
      <Footer/>
    </>
  )
}

export default HomeView