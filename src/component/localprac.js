import React, { useState } from "react";

const Local =()=>{

    const [data,setdata]=useState('')
    const[input,setInput]=useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Create an object to store the data
        const ans = {
          data,
          input,
        };
    
        // Store the data in localStorage as a JSON string
        localStorage.setItem('formData', (ans));
    
        // Clear the input fieldsy
        setdata('')
        setInput('');
      
    
        alert('Data has been stored in localStorage!');
      };
    



    return(
<>
       <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={data} onChange={(e)=>setdata(e.target.value)}/>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
  
      <button type="submit">Submit</button>
      </form>
       </div>
       </>
    )
}
export default Local;