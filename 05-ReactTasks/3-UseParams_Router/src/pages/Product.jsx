import React from 'react'
import { useParams } from 'react-router-dom'

const Product = ({products}) => {
    const {id} = useParams()
  return (
    <div className='cards'>
    {products.filter(item => item.id == id).map(item => {
        return (
            <div className='card'>
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>
                <p>{item.price}</p>
            </div>
        )
    })}
    </div>
  )
}

export default Product