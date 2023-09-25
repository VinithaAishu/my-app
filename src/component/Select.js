import React, { useState } from 'react'


const countryArrays =[{
    country:"india",
    value:"in",
    cities:["fgu","khjyhfd","gfhhjjh","gffhh","hghjj"]
},
{

    country:"pakistan",
    value:"pak",
    cities:["fgu","khjyhfd","gfhhjjh","gffhh","hghjj"]
},
{
    country:"news",
    value:"new",
    cities:["fgu","khjyhfd","gfhhjjh","gffhh","hghjj"]
}
]

export default function Select() {
    const [array,setarray]=useState(countryArrays)
    const [state,setstate]=useState([])
const changeState =(a)=>{
    const fil =array.filter((item)=>item.value==a)
   
    setstate(fil[0].cities)
    // console.log(fil[0]);
    console.log(state);
}

  return (
    <div>
  
  <select onChange={(e)=>changeState(e.target.value)}>
     { array.map((item,index)=>(
        <option value={item.value}>{item.country}</option>
    ))
     }
     </select>


  <select>
    {
        state.map((item)=>(
            <option value={item}>{item}</option>
        ))
    }
 </select>
 </div>
  )
}
