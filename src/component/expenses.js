import { useState } from "react";

export default function Expenses(){
    const [button,showButton]=useState(false)
    const [name,setName]=useState('')
    const [amount,setamount]=useState('')
    const [date,setdate]=useState('')
    const [table,settable]=useState([])

        
const handleshow =()=>{
    showButton(true)
}

   
     const handleAddClick =()=>{
        if(name && amount && date){
            const newrow ={name,amount,date};
            settable([...table,newrow])
            setName('')
            setamount('')
            setdate('')

        }

     }   

    return(
        <>
        {button ? (
            <div>
        <label>Title</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Date</label>
        <input type="date"  value={date} onChange={(e)=>setdate(e.target.value)}/><br/>
        <label>Amount</label>
        <input type="text"  value={amount} onChange={(e)=>setamount(e.target.value)}/>

        
        
        <button  onClick={handleAddClick}>Add new expenses</button>
        </div>
        ):(
            <button onClick={handleshow}>showinput</button>
        )}
        <table>

        {table.map((rowdata,index)=>(
            <tr key={index}>
                <td>{rowdata.name}</td>
                <td>{rowdata.date}</td>
                <td>{rowdata.amount}</td>
            </tr>
        ))}    </table>
        
        </>

   )

    }

