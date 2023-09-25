// import React from 'react';
// import Sample from './component/Sample';
// import Nav from './component/Nav';
// import './App.css';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { useState } from "react";
import P from './component/Propss'
// function Myfunction() {
//   return (
//     <>
//     <div className='container'>

//     </div>
   
//     <BrowserRouter>
//     <ul className='list'>
//       <Link to ={'/a'}> <li>Home</li></Link>
//       <Link to ={'/b'}> <li>View</li></Link>
//       <Link to ={'/c'}> <li>akshaya</li></Link>
//     </ul>
//     <Routes>
    
//       <Route path='/a' element={<Nav/>}/>
//       <Route path='/b' element={<Sample/>}/>
//       </Routes>
//       </BrowserRouter>
//       </>

//   )
 
  
// }
// export default Myfunction


function App(){
    const[State,setState]=useState(0)
    const[Word,setWord]=useState('')
    return(
        <>
<button onClick={()=>setState(1)}>1</button>
<button onClick={()=>setState(2)}>2</button>
{/* <input onChange={(e)=>setWord(e.target.value)}/> */}

<br></br>
<P site={State} word={Word}/>
        </>
    )
}
export default App