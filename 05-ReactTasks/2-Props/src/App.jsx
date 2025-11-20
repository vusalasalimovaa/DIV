import './App.css'
import Products from './components/Products.jsx'
import products from './data/data.js'

function App() {
  return (
    <>
      <Products products={products}/>
    </>
  )
}

export default App
