// context/todoContext.tsx




const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
  ]);





//   import * as React from 'react';

import { useContext, useState } from 'react';
import {createContext} from 'react';

//   import { TodoContextType, ITodo } from '../@types/todo';
import { ProductContextType, IProduct } from '../@types/product'




interface IChildren {
     children: any
}

// export const TodoContext = React.createContext<TodoContextType | null>(null);
export const ProductContext = React.createContext<IProductContextType|null>(null);

export const useProductContext = () => {
     return useContext(ProductContext)
}

export const ProductProvider = ({children}:IChildren) => {

     const url = 'https://win22-webapi.azurewebsites.net/api/products'

     const [product, setProduct] = useState({})
     // const [products, setProducts] = useState([])

     const [featuredProducts, setFeaturedProducts] = useState([])
     const [showcaseProducts, setShowcaseProducts] = useState([])
     const [toplistProducts, setToplistProducts] = useState([])

     const [productCollection, setProductCollection] = useState([])
     

     const getProduct = async (articleNumber:string) => {
          const result = await fetch(url + `/${articleNumber}`)
          setProduct(await result.json())
     }

     // const getProducts = async () => {
     //      const result = await fetch(url)
     //      setProducts(await result.json())
     // }
     
     const getFeaturedProducts = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setFeaturedProducts(await result.json())          
     }
     
     const getShowcaseProducts = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setShowcaseProducts(await result.json())          
     }
     
     const getToplistProducts = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setToplistProducts(await result.json())          
     }
     
     const getProductCollection = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setProductCollection(await result.json())          
     }


     return <ProductContext.Provider value={{
                    product, getProduct, 
                    // products, getProducts, 
                    featuredProducts, getFeaturedProducts, 
                    showcaseProducts, getShowcaseProducts, 
                    toplistProducts, getToplistProducts, 
                    productCollection, getProductCollection}}>

          {children}
     </ProductContext.Provider>
}