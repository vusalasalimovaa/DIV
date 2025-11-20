import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <div className='card'>
            <Link to={`/users/${item.id}`}><h2>Name: {item.name}</h2>
                <p>Username: {item.username}</p>
                <p>Email: {item.email}</p>
                <p>City: {item.address.city}</p></Link>
        </div>
    )
}

export default Card