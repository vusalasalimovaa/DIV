import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail';
import ProductCard from '../comp/ProductCard';

const Home = ({products}) => {

 

  
  // console.log(products)

  return (
    <div className='cards'>{
      products?.map(item => {
        return <ProductCard key={item.id} item={item}/>
      })
    }</div>
  )
}

export default Home