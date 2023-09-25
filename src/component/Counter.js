import React, { useState } from 'react'

export default function Counter() {
    const [count,setcount] = useState(0);
    const logesh =() =>{
        setcount(count +1)
    }
    console.log("logesh");
  return (
    <div>
      <h1>am clicked {count} times</h1>
      <button onClick={logesh}>add</button>
    </div>
  )
}