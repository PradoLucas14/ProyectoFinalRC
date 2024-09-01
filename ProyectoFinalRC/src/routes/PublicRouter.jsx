import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../Components/Pages/Home/HomePage/HomePage';
import Contact from '../Components/Pages/Home/Contact/Contact';
import RegisterForm from '../Components/Pages/RegisterUser/RegisterUser';
import Gallery from '../Components/Pages/ImgGalery/ImgGalery';
import Error404 from '../Components/Pages/Error404/Error404';
import LoginPage from '../Components/Pages/Login/Login';
import AboutTeam from '../Components/Pages/About/Aboutteam';

const PublicRouter = ({user,setUser}) => {
  return (
      <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path='/Home' element={<HomePage user={user}/> }/>
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/AboutTeam" element={<AboutTeam />} />
          <Route path="/Login" element={<LoginPage setUser={setUser} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Galery" element={<Gallery />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
  )
}

export default PublicRouter;