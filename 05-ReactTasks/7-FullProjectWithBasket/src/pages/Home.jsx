import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/productCard/ProductCard';
import '../components/productCard/style.css';

const Home = ({products, handleClick}) => {

 
  return (
    <div className='cards'>
      {products?.map(product => {
        return (
          <ProductCard key={product.id} product={product} handleClick={handleClick}  />
        )
      })}
    </div>
  )
}

export default Home