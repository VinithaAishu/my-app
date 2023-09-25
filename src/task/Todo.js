import React from 'react'
import { useState } from 'react'

export default function Todo() {
const [name,setname]=useState(
[
    {
        id:3,
        checked:true,
        item:"play cricket"

    },
    {
        id:1,
        checked:true,
        item:"play cricket"

    },
    {
        id:2,
        checked:false,
        item:"play cricket"

    }
])
const handlecheck=(id)=>{
    const listItems=name.map((item)=>
        item.id===id?{...item,checked:!item.checked}:item
    )
    setname(listItems)
}
const removebtn=(id)=>{
    const list =name.filter((item)=>
    item.id!==id
    )
    setname(list)
    localStorage.setItem("todo",JSON.stringify(list))
}


  return (
    <>
    {(name.length)?(
    <ul>
    {name.map((item)=>(


    <li key={item.id}>
        <input type='checkbox'
        onChange={()=>handlecheck(item.id)}
        checked={item.checked}/>
        <label onDoubleClick={()=>handlecheck(item.id)}>{item.item}</label>
      {item.checked &&( <button 
          onClick={()=>removebtn(item.id)} >delete</button>)}
       

    </li>

    ))}

</ul>
  )
  :(<p>your empty</p>
  )
}
    </>
  )
}
