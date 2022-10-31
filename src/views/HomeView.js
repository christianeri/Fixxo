import React from 'react'
import NavigationSection from '../sections/NavigationSection'

import HeroSection from '../sections/HeroSection';
import SplitBanner from '../sections/SplitBanner';
import FeaturedProducts from '../sections/FeaturedProductsSection';
import BannerDouble from '../sections/DoubleBannerSection';
import OurSpeciality from '../sections/CustomerInformationPromoSection';
import ShowcaseGrid from '../sections/ShowcaseGridSection';
import BannerSingle from '../sections/SingleBannerSection';
import ShowcaseColumns from '../sections/ProductTopListsSection';
import CustomerInformation from '../sections/CustomerInformationSection';
import FeaturedProductsSection from '../sections/FeaturedProductsSection';

import FooterSection from '../sections/FooterSection';



const HomeView = () => {
  return (
    <>
      <NavigationSection/>
      <HeroSection/>
      <SplitBanner/>
      {/* <BannerDouble/> */}
      {/* <OurSpeciality/> */}
      <FeaturedProductsSection/>
      {/* <BannerSingle/> */}
      {/* <ShowcaseColumns/> */}
      {/* <CustomerInformation/> */}
      <FooterSection/>
    </>
  )
}

export default HomeView