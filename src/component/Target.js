// import React, { useState } from 'react'

// export default function NewLogesh() {
//   const [value, setvalue] = useState(0);
//   function logesh (e){
//     setvalue(e.target.value);
//   }
 
//   return (
//     <div>
//       <input type='text' onChange={logesh} value={value} />
//       <p>{value}</p>
//     </div>
//   )
// }

// }
export default function Target(){
const dataArray =[0,1,2,3,4,5,6,7,8,9];
const itemList= dataArray.map((index)=>{
  if(index>=1 && index<=7){
    return <li key={index}>data</li>;

  }
  return null;
})
// .slice(0,7);
return <ul>{itemList}</ul>;
}