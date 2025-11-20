import React from 'react'
import Card from '../comp/Card'

const Users = ({ data }) => {
  return (
    <div className='cards'>
      {
        data?.map(item => {
          return <Card key={item.id} item={item} />
        })
      }
    </div>
  )
}

export default Users