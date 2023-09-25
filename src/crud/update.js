import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./api";

export default function Update()
{

const [id,setid]=useState(0);
const [name,setname]=useState("");
const navi=useNavigate();
const save=(event)=>{
    event.preventDefault();
    axios.put(`${API}/${id}`,{uname:name});
    setname('')
    navi('/')

}
useEffect(()=>{
    setid(localStorage.getItem('id'));
    setname(localStorage.getItem('uname'));

},[])
return(
<>
<h1>Update forms</h1>
<form onSubmit={save}>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
    <input type="submit"/>
</form>

</>


)
}