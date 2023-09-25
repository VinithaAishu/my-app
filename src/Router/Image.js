import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import natural from '../photo-1575936123452-b67c3203c357.jpg';
import vinitha from '../Image_created_with_a_mobile_phone.png';
export default function Image() {
const navi = useNavigate();
function home() {
    navi('/')
    
}
const[image,changeimg]=useState(natural);

function change(){
 changeimg(vinitha)
}
function pre(){
    changeimg(natural)
}
  return (
    <>
    <h1>hello</h1>
   

    <button onClick={home}>back to home</button>
   <img src={image}/>
   <button onClick={change}>change</button>
   <button onClick={pre}>previous</button>
   
    {/* <button onClick={change}></button> */}
   </>
  )
}
