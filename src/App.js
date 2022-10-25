import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BannerSplit from './components/BannerSplit';
import FeaturedProducts from './components/FeaturedProducts';
import BannerDouble from './components/BannerDouble';
import OurSpeciality from './components/OurSpeciality';
import ShowcaseGrid from './components/ShowcaseGrid';
import BannerSingle from './components/BannerSingle';
import ShowcaseColumns from './components/ShowcaseColumns';
import CustomerInformation from './components/CustomerInformation';
import Footer from './components/Footer';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ContactView from './views/ContactView';

import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';

import NotFoundView from './views/NotFoundView';


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomeView/>} />
        <Route path="/categories" element={<CategoriesView/>} />
        <Route path="/products" element={<ProductsView/>} />
        <Route path="/contact" element={<ContactView/>} />
        
        <Route path="/search" element={<SearchView/>} />
        <Route path="/compare" element={<CompareView/>} />
        <Route path="/wishlist" element={<WishListView/>} />

        <Route path="*" element={<NotFoundView/>} />

      </Routes>

    </BrowserRouter>
    // <>     
    //     <Navbar/>
    //     <Hero/>
    //     <BannerSplit/>
    //     <FeaturedProducts/>
    //     <BannerDouble/>
    //     <OurSpeciality/>
    //     <ShowcaseGrid/>
    //     <BannerSingle/>
    //     <ShowcaseColumns/>
    //     <CustomerInformation/>
    //     <Footer/>
    // </>
  );
}

export default App;
