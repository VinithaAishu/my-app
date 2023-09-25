import React from "react";

// export default function Props(){
//     return(
//         <>
//             <h1>Logeshkumar</h1>
//             <Idm  name="logesh"/>
//                     </>
//           )
// }

// function Idm(props){
//     return(
//         <>
//             <h2> Welcome Mr.{props.name}!!!</h2>
//             <Stand course='Javascript' />
//                  </>
//            )
// }

// function Stand (props){
//     console.log("hello world");
//     return(
//         <>
//             <h3> Am Learning {props.course}</h3>
          
//         </>
//     )
// }



const P=(pro)=>{
if(pro.site===1)
{
    return(
        <div>
            <p>1{pro.word}</p>
            <p>2{pro.word}</p>
        </div>
    )
}
if(pro.site===2){
    return(
        <div>
            <p>3</p>
            <p>4</p>
        </div>
    )
}
}
export default P