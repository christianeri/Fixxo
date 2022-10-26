import React from 'react'
import NavigationSection from '../sections/NavigationSection'

import Hero from '../components/Hero';
import BannerSplit from '../components/BannerSplit';
import FeaturedProducts from '../components/FeaturedProducts';
import BannerDouble from '../components/BannerDouble';
import OurSpeciality from '../components/OurSpeciality';
import ShowcaseGrid from '../components/ShowcaseGrid';
import BannerSingle from '../components/BannerSingle';
import ShowcaseColumns from '../components/ShowcaseColumns';
import CustomerInformation from '../components/CustomerInformation';



const HomeView = () => {
  return (
    <>
      <NavigationSection/>
      <Hero/>
      <BannerSplit/>
      <FeaturedProducts/>
      <BannerDouble/>
      <OurSpeciality/>
      <ShowcaseGrid/>
      <BannerSingle/>
      <ShowcaseColumns/>
      <CustomerInformation/>
    </>
  )
}

export default HomeView