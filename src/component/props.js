// // export default  function Pass(){

// import { useState } from "react";

// //     return(
// //         <>
        
// //         <h1>vinitha</h1>
// //         <Idm name="hello"/>

// //         </>
// //     )
// //     }
// // function Idm(props) {
// //     return(

// //         <>
// //         <h2>welcom mr.{props.name}</h2>
// //         </>
// //     )
    
// // }

// const Pass=()=>{

//     return(
//         <>
//         <h1>vinitha</h1> 
//         <Course name ="reactjs" Age={18}/>
               
//         </>
//     )
// }
// const Course=(props)=>{
//     return(
//         <>
//         <h2>{props.name}</h2>
//         <h2>{props.Age}</h2>
//         </>
//     )
// }
 
// export default Pass;

// const Pass =()=>{

//     const [data,setdata]=useState(5)
   
//     return(
//         <>
//         <h1>{data}</h1>
//         <button onClick={()=>setdata((prevcount)=>prevcount+1)}>add</button>
        
//         </>
//     )
// }
// export default Pass;
import React, { useState, useEffect } from 'react';

function Pass() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Pass;
