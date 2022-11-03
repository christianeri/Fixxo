import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import './App.css';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactView from './views/ContactView';

import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';

import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomeView/>} />
        <Route path="/categories" element={<CategoriesView/>} />
        <Route path="/products/:id" element={<ProductDetailsView/>} />
        <Route path="/contact" element={<ContactView/>} />
        
        <Route path="/search" element={<SearchView/>} />
        <Route path="/compare" element={<CompareView/>} />
        <Route path="/wishlist" element={<WishListView/>} />
        <Route path="/shoppingcard" element={<ShoppingCartView/>} />

        <Route path="*" element={<NotFoundView/>} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
