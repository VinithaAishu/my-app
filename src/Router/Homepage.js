import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
const navigate = useNavigate();
function cli() {
    navigate("/Images")
    
}




  return (
   <button onClick={cli}>Main</button>
  )
}
