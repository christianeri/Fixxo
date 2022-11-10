import React, { useContext } from 'react'

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

import {ProductContext} from '../contexts/contexts'



const HomeView = () => {

  window.top.document.title = 'Fixxo'

  const productContext = useContext(ProductContext);

  return (
    <>
      <MainNavigation/>
      <HeroSection/>
      <SplitBanner/>
      <FeaturedProducts title='Featured Products' sectionName='featured-products' items={productContext.featuredProducts}/>
      <DoubleBanner/>
      <CustomerInfoShowcase/>
      <ProductPromoShowcase items={productContext.productShowcaseItems}/>
      <SingleBanner/>
      <ProductToplistShowcase items={productContext.productShowcaseItems}/>
      <CustomerInfoMenu/>
      <Footer/>
    </>
  )
}

export default HomeView