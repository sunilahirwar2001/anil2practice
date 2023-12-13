import React from 'react'

const User1 = (props) => {
  return (
    <div>
        <span>{props.data.name}</span>
        <span>{props.data.address.city}</span>
       
    </div>
  )
}

export default User1
