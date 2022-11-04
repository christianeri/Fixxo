
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { ProductContext } from './contexts/contexts';

import './App.css';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
// import ProductDetailsView from './views/ProductDetailsView';
import ContactView from './views/ContactView';

import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';

import NotFoundView from './views/NotFoundView';
import { useEffect, useState } from 'react';



function App() {

  const [products, setProducts] = useState({
    allProducts: [],
    featuredProducts: []
  })
  // const [productGrid, setProductGrid] = useState([])
  // const [showcaseGrid, setShowcaseGrid] = useState([])



  useEffect(() => {    
    const fetchAllProducts = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, allProducts: await result.json()})
    }      
    fetchAllProducts()
   
    const fetchProductGrid = async () => {

      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }      
    fetchProductGrid()

  }, [setProducts])



  return (
    <BrowserRouter>

      <ProductContext.Provider value={products}>
        <Routes>

          <Route path="/" element={<HomeView/>} />
          <Route path="/categories" element={<CategoriesView/>} />
          {/* <Route path="/products/:id" element={<ProductDetailsView/>} /> */}
          <Route path="/products" element={<ProductsView/>} />
          <Route path="/contact" element={<ContactView/>} />

          <Route path="/search" element={<SearchView/>} />
          <Route path="/compare" element={<CompareView/>} />
          <Route path="/wishlist" element={<WishListView/>} />
          <Route path="/shoppingcard" element={<ShoppingCartView/>} />

          <Route path="*" element={<NotFoundView/>} />

        </Routes>
      </ProductContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;