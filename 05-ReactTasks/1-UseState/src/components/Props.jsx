import React from 'react'

const Props = ({artir,azalt,count}) => {
  return (
    <div>
        <p>{count}</p>
        <button onClick={artir}>Artir</button>
        <button onClick={azalt}>Azalt</button>
    </div>
  )
}

export default Props