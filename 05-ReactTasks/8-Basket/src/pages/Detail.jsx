import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [userDetail, setUserDetail] = useState()

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${user}`)
            .then(res => setUserDetail(res.data))
            .catch(err => console.log(err.message))
    }, [])
    console.log(userDetail)

    const { user } = useParams()

    return (
        <div>
            {
                userDetail?.name
            }
        </div>
    )
}

export default Detail