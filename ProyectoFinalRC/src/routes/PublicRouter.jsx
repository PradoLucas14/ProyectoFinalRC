import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Components/Pages/Home/HomePage/HomePage';

import Contact from '../Components/Pages/Home/Contact/Contact';
import RegisterForm from '../Components/Pages/RegisterUser/RegisterUser';
import Gallery from '../Components/Pages/ImgGalery/ImgGalery';
import Error404 from '../Components/Pages/Error404/Error404';
import LoginPage from '../Components/Pages/Login/Login';
import AboutTeam from '../Components/Pages/About/Aboutteam';

const PublicRouter = (user,setUser) => {
  return (
      <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/aboutteam" element={<AboutTeam />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imggalery" element={<Gallery />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    
  )
}

export default PublicRouter;