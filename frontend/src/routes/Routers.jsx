import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'

import {Routes,Route} from 'react-router-dom'



function Routers() {
  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/register" element={<Signup />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/doctors" element={<Doctors />}/>
    <Route path="/doctor/:id" element={<DoctorDetails />}/>
  </Routes>
  )
}

export default Routers
