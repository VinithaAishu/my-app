import React, { useState } from 'react'


export default function Form() {
    const[data, setdata] = useState({})
    const navi = e =>{
        setdata({
            ...data, [e.target.name]: e.target.value
        })
    }
    const bharathi = (e) =>{
        e.preventDefault()
        console.log(data);
    }
  return (
    <div>
      <form onSubmit={bharathi}>

        <label>Username</label><input type='text' name='username' onChange={navi}  /><br></br><br></br>
        <label>Password</label><input type='password' name='password' onChange={navi}  /><br></br><br></br>
        <label>Mobile No</label><input type='number' name='mobileno' onChange={navi} /><br></br><br></br>
       <label>Address</label><input type='text' name='address' onChange={navi} /><br></br><br></br>
        <label>Age</label><input type='number' name='age' onChange={navi} /><br></br><br></br>
        <button>Submit</button>
      </form>
      <table border={1}>
        <tr>
            <td>{data.username}</td>
            <td>{data.password}</td>
            <td>{data.mobileno}</td>
            <td>{data.address}</td>
            <td>{data.age}</td>

        </tr>
      </table>
    </div>
  )
}
