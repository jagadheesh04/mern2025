import React from 'react'

const home = ({items,users}) => {
  return (
    <div>
      <ol>
        {items.map((fruit) => (<li>{fruit}</li>))}
      </ol>
      
    </div>
  )
}

export default home