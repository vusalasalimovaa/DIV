import React, { useState } from 'react'
import './style.css'

const ProductCard = ({product, handleClick}) => {

  return (
    <div className='card'>
        <img src={product.image} alt="" />
        <h2>{product.name}</h2>
        <p>{product.price}$</p>
        <div className='btns'>
          <button className='btn'>View more</button>
          <button className='btn' onClick={() => {
            handleClick(product)
          }}>Add to basket</button>
        </div>
    </div>
  )
}

export default ProductCard