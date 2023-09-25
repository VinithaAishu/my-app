import { useState } from "react"

export default function API(){

    const [data,setdata]=useState()

fetch("https://api-thirukkural.vercel.app/api?num=1")
.then((msg) =>msg.json())
.then((b)=>console.log(b.line1))
// let ans =b.line1
return(
    <>
    
    {/* <p>{b.line1}</p>     */}
    </>
)

}