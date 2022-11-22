
import React, { useEffect } from 'react'

import { ProductContextType, ProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

interface Props {
     amount?:number
     orientation:string
}

const ProductCardGrid: React.FC<Props> = ({amount, orientation}) => {

     const {productCollection, getProductCollection} = React.useContext(ProductContext) as ProductContextType

     useEffect (() => {
       getProductCollection(amount)
     }, [])


  return (
     <>
          {
               productCollection.map(product => <ProductCard key={product.articleNumber} orientation={orientation} item={product}/>)
          }
     </>
  )
}

export default ProductCardGrid