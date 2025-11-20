import React, { useEffect, useState } from 'react'
import Navbar from './comp/Navbar'
import Footer from './comp/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Service from './pages/Service'
import Users from './pages/Users'
import './App.css'
import axios from 'axios'
import Detail from './pages/Detail'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  const [data, setData] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err.message))

      axios(`https://jsonplaceholder.typicode.com/photos`)
     .then(res => setProducts(res.data))
     .catch(err => console.log(err.message))
  }, [])

  
  // console.log(data)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home products={products} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/users/:user' element={<Detail />} />
          <Route path='/:product' element={<ProductDetail products={products} />} />
          <Route path='/users' element={<Users data={data} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App