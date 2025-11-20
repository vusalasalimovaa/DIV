import { useEffect, useState } from 'react'
import './App.css'
import Posts from './components/Posts'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(item => setData(item))
  }, [])
  

  return (
    <>
      <Posts data={data} />
    </>
  )
}

export default App
