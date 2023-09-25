import React, { useState } from 'react';


export default function StringReverse()
  { 
    const [input,setinput] = useState(''); 
  const [result,setresult] = useState(''); 
  const a = () => { 
    const reversed = input.split('').reverse().join(''); 
  setresult(reversed); 
  setinput('') };
   return (

    <> 
    <input type='text ' value={input} onChange={(e)=>setinput(e.target.value)}/>
    <button onClick={a}>click</button>
    <p>{result}</p>
    </>
       
)}