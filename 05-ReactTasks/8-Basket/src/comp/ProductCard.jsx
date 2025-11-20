import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
const ProductCard = ({item}) => {

const navigate = useNavigate()
// console.log(item)

    return (
        <div className='card' onClick={() => navigate(`/${item.id}`)}>
            <div className='image'></div>
            <h2>{item?.title}</h2>
            <FaCartShopping />
            <FaHeart />
        </div>
    )
}

export default ProductCard