import React,{useState} from 'react'

function Button({count, handleCount}) {

  return (
    <div>
      <button onClick = {handleCount}>Click me {count}</button>
    </div>
  )
}

export default Button
