import React, { useState } from 'react'
import Target from '../component/Target';
import Files1 from './Files1';

export const a=React.createContext([])


export default function Indexcontext() {
const [name,setname] =useState("");
const[view,setview]=useState([]);

function ok(event) {
    event.preventDefault();
    setview(names=>[...names,name]);
    setname('')
}

  return (
    <>
    <h1>Indexcontext</h1>
    <form onSubmit={ok}>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
        <button type='submit'>submit</button>
      
    </form>
    <a.Provider value={view}>
        <Files1/>
    </a.Provider>
  </>
  )
}
