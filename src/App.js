
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import { ProductContext } from './contexts/contexts';

import './App.css';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactView from './views/ContactView';

import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';

import OnSaleView from './views/OnSaleView';

import NotFoundView from './views/NotFoundView';
import { ProductProvider } from './contexts/ProductContext';



function App() {

  // const [products, setProducts] = useState({
  //   allProducts: [],
  //   featuredProducts: [],
  //   productShowcaseItems: []
  // })
  // const [productGrid, setProductGrid] = useState([])
  // const [showcaseGrid, setShowcaseGrid] = useState([])

  // useEffect(() => {    
  //   const fetchAllProducts = async () => {

  //     let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
  //     setProducts({...products, allProducts: await result.json()})
  //   }      
  //   fetchAllProducts()
   
  //   const fetchProductGrid = async () => {

  //     let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
  //     setProducts({...products, featuredProducts: await result.json()})
  //   }      
  //   fetchProductGrid()

  //   const fetchProductShowcaseItems = async () => {

  //     let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
  //     setProducts({...products, productShowcaseItems: await result.json()})
  //   }      
  //   fetchProductShowcaseItems()

  // }, [setProducts])



  return (
    <BrowserRouter>

    <ProductProvider>
      {/* <ProductContext.Provider value={products}> */}
        <Routes>

          <Route path="/" element={<HomeView/>} />
          <Route path="/categories" element={<CategoriesView/>} />
          {/* <Route path="/products/:id" element={<ProductDetailsView/>} /> */}
          <Route path="/QuickView" element={<ProductDetailsView/>} />
          <Route path="/products" element={<ProductsView/>} />
          <Route path="/contact" element={<ContactView/>} />

          <Route path="/search" element={<SearchView/>} />
          <Route path="/compare" element={<CompareView/>} />
          <Route path="/wishlist" element={<WishListView/>} />
          <Route path="/shoppingcard" element={<ShoppingCartView/>} />

          <Route path="/sale" element={<OnSaleView/>} />

          <Route path="*" element={<NotFoundView/>} />

        </Routes>
      {/* </ProductContext.Provider> */}
      </ProductProvider>
      
    </BrowserRouter>
  );
}

export default App;