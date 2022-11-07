import React, { useContext } from 'react'
import NavigationSection from '../sections/NavigationSection'

import HeroSection from '../sections/HeroSection';
import SplitBanner from '../sections/BannerSplit';
import ProductGrid from '../components/ProductCardGrid';
import DoubleBanner from '../sections/BannerDouble';
import CustomerInfoShowcase from '../sections/CustomerInfoShowcase';
import ShowcaseGrid from '../sections/ProductShowcaseSection';
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
      <NavigationSection/>
      <HeroSection/>
      <SplitBanner/>
      <ProductGrid title='Featured Products' sectionName='featured-products' items={productContext.featuredProducts}/>
      <DoubleBanner/>
      <CustomerInfoShowcase/>
      <ShowcaseGrid items={productContext.productShowcaseItems}/>
      <SingleBanner/>
      {/* <ShowcaseColumns/> */}
      <CustomerInfoMenu/>
      <Footer/>
    </>
  )
}

export default HomeView