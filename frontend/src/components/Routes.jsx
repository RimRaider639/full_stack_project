import React from 'react'
import {Route, Routes} from "react-router"
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import About from './about/About'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default AllRoutes