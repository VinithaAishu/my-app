import React, { useState } from 'react'

export default function Buttontask() {

  const [name,seName]=useState("vini");

 const randomchange=(()=>{
const ob =["beauty","marvelous","extradinary"];
const chang =Math.floor(Math.random()*3);

seName(ob[chang]);

}
)


  return (
    <>
    <p>she is {name}</p>
    <button onClick={randomchange}>Vinitha</button>
    
    </>
  )
}
