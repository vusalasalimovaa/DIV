import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Users from './pages/Users'
import Products from './pages/Products'
import Basket from './pages/basket/Basket'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios('http://localhost:3000/products')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err.message))
  },[])

  const [basket, setBasket] = useState([]);

  const handleClick = (arg) => {
    const arr = [...basket];
    const index = arr.findIndex(i => i.id == arg.id)

    if (index == -1) {
      arr.push({...arg, count: 1})
    } else{
      arr[index].count += 1
    }

    setBasket(arr);
  }

  console.log(basket);
 


  return (
    <>
      <Navbar basket={basketw} />

      <Routes>
        <Route path='/' element={<Home products={products} handleClick={handleClick} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/products' element={<Products products={products}/>}/>
        <Route path='/basket' element={<Basket basket={basket} setBasket={setBasket} />}/>
      </Routes>

      <Footer />

    </>
  )
}

export default App
