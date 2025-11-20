import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { DiBackbone } from 'react-icons/di';
const ProductDetail = ({products}) => {

   const {product} = useParams()

//    console.log(data.find(item => item.id == product))
//    console.log(data)
   console.log()
    return (
        <div>
           {
            products?.filter(item => item.id == product).map(item => {
                return <div>{item.title}</div>
            })
           }
        </div>
    )
}

export default ProductDetail