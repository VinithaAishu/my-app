import React from 'react'
import { useState } from 'react'

const Addtocart = () => {

    const [count,setcount]=useState(0);
   function vinitha() {
    setcount(count+1)
   }
  return (
    <div className='vini'>
        <h1>vini</h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg'/>
        <button onClick={vinitha}>add</button>
        <button>{count}</button>
    </div>
  )
}

export default Addtocart