
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BannerSplit from './components/BannerSplit';
import FeaturedProducts from './components/FeaturedProducts';
import BannerDouble from './components/BannerDouble';
import OurSpeciality from './components/OurSpeciality';
import ShowcaseGrid from './components/ShowcaseGrid';
import SingleBanner from './components/BannerSingle';

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
        <SingleBanner/>
    </>
  );
}

export default App;
