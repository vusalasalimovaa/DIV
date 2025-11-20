import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Cards from './components/Cards';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/posts')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Cards data={data}/>}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </>
  )
}

export default App
