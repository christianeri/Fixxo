import React, { useState } from 'react'
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

  window.top.document.title = 'Fixxo'

  const [products, setProducts] = useState([    
    {    id: 1, 
         productName: "modern Black Blouse 1", 
         category: "Women",
         currentPrice: "$35",
         rating: 5,
         imgURL: "Product-001.png"
    },
    {    id: 2, 
         productName: "modern Black Blouse 2 ", 
         category: "Women",
         currentPrice: "$35",
         rating: 5,
         imgURL: "Product-001.png"
    },
    {    id: 3, 
         productName: "modern Black Blouse 3 ", 
         category: "Women",
         currentPrice: "$35",
         rating: 5,
         imgURL: "Product-001.png"
    },
    {    id: 4, 
         productName: "modern Black Blouse 4", 
         category: "Women",
         currentPrice: "$35",
         rating: 5,
         imgURL: "https://images.pexels.com/photos/5276441/pexels-photo-5276441.jpeg"
    }
])

  return (
    <>
      <NavigationSection/>
      <HeroSection/>
      <SplitBanner/>
      {/* <BannerDouble/> */}
      {/* <OurSpeciality/> */}
      <FeaturedProductsSection title='Featured Products' products={products}/>
      {/* <BannerSingle/> */}
      {/* <ShowcaseColumns/> */}
      {/* <CustomerInformation/> */}
      <FooterSection/>
    </>
  )
}

export default HomeView