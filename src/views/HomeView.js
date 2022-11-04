import React, { useContext } from 'react'
import NavigationSection from '../sections/NavigationSection'

import HeroSection from '../sections/HeroSection';
import SplitBanner from '../sections/SplitBanner';
import ProductGrid from '../components/ProductGrid';
import BannerDouble from '../sections/DoubleBannerSection';
import OurSpeciality from '../sections/CustomerInformationPromoSection';
import ShowcaseGrid from '../sections/ShowcaseGridSection';
import BannerSingle from '../sections/SingleBannerSection';
import ShowcaseColumns from '../sections/ProductTopListsSection';
import CustomerInformation from '../sections/CustomerInformationSection';

import FooterSection from '../sections/FooterSection';

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
      {/* <BannerDouble/> */}
      <OurSpeciality/>
      {/* <ShowcaseGrid products={products}/> */}
      {/* <BannerSingle/> */}
      {/* <ShowcaseColumns/> */}
      <CustomerInformation/>
      <FooterSection/>
    </>
  )
}

export default HomeView