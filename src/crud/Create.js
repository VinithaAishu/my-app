import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { API } from "./api";
export default function Create(){

   
const [name,setname]=useState("");
const [Lastname,setLastname] =useState('');
const [checked,setchecked] =useState('')
const[view,setview]=useState([]);
const navi =useNavigate();


function save(event){
event.preventDefault();
axios.post('https://64d31f5867b2662bf3dbb2f7.mockapi.io/code',{name,Lastname,checked});
setname('');
setLastname('');
setchecked('');


}
useEffect(()=>{
    axios.get('https://64d31f5867b2662bf3dbb2f7.mockapi.io/code').then((s)=>{
        setview(s.data);
        console.log(s.data);
    })
},[])

const del =(w)=>{
    axios.delete(`${API}/${w}`).then(()=>{
        
        axios.get('https://64d31f5867b2662bf3dbb2f7.mockapi.io/code').then((s)=>{
            setview(s.data);
})
    })
}
    const ed=(a,b)=>{
        localStorage.setItem('id',a);
        localStorage.setItem('uname',b);
        navi('/editTheForm')
    }

    return(


        <>
        <form onSubmit={save}>
            <input type="text" 
            value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="text" 
            value={Lastname} onChange={(e)=>setLastname(e.target.value)}/>
            <input type="checkbox" checked={checked} onChange={()=>setchecked(!checked)}/>
            <input type="submit"/>
        </form>
        <dl>
            <dt>Username</dt>
            <ol>
                <table>
                    <tr>
                        <th>name</th>
                        <th>Lastname</th>
                        <th>checked</th>
                    </tr>
                
                {view.map((a)=>
                <tr>
                
                <td>    {a.name}</td>
                <td>    {a.Lastname}</td>
                <td>    {a.checked ?" checked" : "notchecked"}</td>
                <td>
                    <button onClick={()=>del(a.id)}>Delete</button>
                    <button onClick={()=>ed(a.id,a.uname)}>Edit</button>
                </td></tr>
                    )}
           </table>
</ol> 
</dl>       
      </>
    )
}