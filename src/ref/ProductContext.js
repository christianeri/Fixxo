import { useContext, useState } from 'react';
import {createContext} from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
     return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
     const url = 'https://win22-webapi.azurewebsites.net/api/products'
     const [product, setProduct] = useState({})
     const [products, setProducts] = useState([])
     const [featuredProducts, setFeaturedProducts] = useState([])

     const getProducts = async () => {
          const result = await fetch(url)
          setProducts(await result.json())
     }
     
     const getFeaturedProducts = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setFeaturedProducts(await result.json())
          
     }

     const getProduct = async (articleNumber) => {
          const result = await fetch(url + ` /${articleNumber}`)
          setProduct(await result.json())
     }

     return <ProductContext.Provider value={{product, getProduct, products, getProducts, featuredProducts, getFeaturedProducts}}>
          {children}
     </ProductContext.Provider>
}