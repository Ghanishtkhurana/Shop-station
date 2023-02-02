import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Account/Login'
import SignIn from './Account/SignIn'
import Cart from './Cart'
import Home from './Home'
import Mobile from './Mobile/Mobile'
import SinglePage from './SinglePage'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/singlepage' element={<SinglePage />} />
      <Route path='/mobile' element={<Mobile />} />
    </Routes>
  )
}

export default Allroutes
