
import React from 'react'

 function Namechange() {
    
function handleNameChange() {
    const names =["earn","give","grow"];
    const int=Math.floor(Math.random()*3);
    return names[int];
}
  return (
    <div>
       
    <p>lets {handleNameChange()} money</p>
  
    </div>
  )
}
export default Namechange;





    

