import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Image from './Image'
export default function One() {
  return (
<div>
    <BrowserRouter>
    
    <Routes>
      
        <Route path='/' element={<Homepage></Homepage>}/>
        <Route path='/Images' element={<Image></Image>}/>
    </Routes>
    
    </BrowserRouter>
</div>
  )
}
