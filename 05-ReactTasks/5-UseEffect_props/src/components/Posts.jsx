import React from 'react'

const Posts = ({data}) => {
  return (
    <ul>
        {
            data.map(item => (
                <li>{item.title}</li>
            ))
        }
    </ul>
  )
}

export default Posts