
import { useState } from 'react';
import { createContext } from 'react';
import { IProduct } from '../models/productModel';


export type ProductContextType = {

     product: IProduct 

     getProduct: (articleNumber:string) => void
     featuredProducts: IProduct[]
     getFeaturedProducts: (take:number) => void
     showcaseProducts: IProduct[]
     getShowcaseProducts: (take:number) => void
     toplistProducts: IProduct[]
     getToplistProducts: (take:number) => void
     productCollection: IProduct[]
     getProductCollection: (take:number) => void
}


export const ProductContext = createContext<ProductContextType|null>(null);

// export const ProductContext = () => {
//      return useContext(ProductContext)
// }

export const ProductProvider = ({children}:any) => {
     
     
     const url:string = 'https://win22-webapi.azurewebsites.net/api/products'

     // const [product, setProduct] = useState<IProduct>({})
     const [product, setProduct] = useState<IProduct>
     ({
          articleNumber:'',
          name: '',
          description: '',
          category: '',
          price: null,
          rating: null,
          imageName: '',
     })


     const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([])
     const [showcaseProducts, setShowcaseProducts] = useState<IProduct[]>([])
     const [toplistProducts, setToplistProducts] = useState<IProduct[]>([])

     const [productCollection, setProductCollection] = useState<IProduct[]>([])
     

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