import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [data, setData] = useState([])
    const {id} = useParams();

    useEffect(() => {
      axios(`http://localhost:3000/posts/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])

    console.log(data);

    
  return (
    <>
    {
        data.views
    }
    </>
  )
}

export default Detail