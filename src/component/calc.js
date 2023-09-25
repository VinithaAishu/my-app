import React, { useState } from 'react'

export default function Calc() {
    const [result,setresult] =useState("");
   
  return (

   
    <>
   <input type='text' value={result}/>
   <button name='1' onClick={e =>setresult(result + e.target.name)}>1</button>
   <button name='2'onClick={e=>setresult(result+e.target.name)}>2</button>
   <button name='3'onClick={e=>setresult(result+e.target.name)}>3</button>
   <button name='4'onClick={e=>setresult(result+e.target.name)}>4</button>

   <button name='5'onClick={e=>setresult(result+e.target.name)}>5</button>
   <button name='6'onClick={e=>setresult(result+e.target.name)}>6</button>
   <button name='7'onClick={e=>setresult(result+e.target.name)}>7</button>
   <button name='8'onClick={e=>setresult(result+e.target.name)}>8</button>

   <button name='9'onClick={e=>setresult(result+e.target.name)}>9</button>
   <button name='0'onClick={e=>setresult(result+e.target.name)}>0</button>
   <button name='+'onClick={e=>setresult(result+e.target.name)}>+</button>
   <button name='-'onClick={e=>setresult(result+e.target.name)}>-</button>
   <button name='*'onClick={e=>setresult(result+e.target.name)}>*</button>
   <button name='/'onClick={e=>setresult(result+e.target.name)}>/</button>
   <button name='backspace'onClick={e=>setresult(result.slice(0,-1))}>Backspace</button>
   <button name='clear'onClick={e=>setresult("")}>Clear</button>
   <button name='='onClick={e=>setresult(eval(result))}>=</button>

    </>
  )
}
