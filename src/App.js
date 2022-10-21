
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

function App() {
  return (
    <>      
        <Navbar/>
        <Hero/>
        <BannerSplit/>
        <FeaturedProducts/>
        <BannerDouble/>
        <OurSpeciality/>
        <ShowcaseGrid/>
        <BannerSingle/>
        <ShowcaseColumns/>
    </>
  );
}

export default App;
