import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import products from '../data/data';
import Product from '../pages/Product'
import Sehife from '../pages/Sehife'

const Router = ({products}) => {

  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products products={products}/>}/>
            <Route path='/products/:id' element={<Product products={products}/>}/>
            {
              products.map(item => {
                return <Route path={`products/${item.category}`} element={<Sehife products={products} category={item.category} />} />
              })
            }
        </Route>
    </Routes>
  )
}

export default Router