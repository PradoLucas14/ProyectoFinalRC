import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/Home/HomePage/HomePage';
import Navbar from './Components/Layout/Header/NavBar/NavBar';
import Footer from './Components/Layout/Footer/Footer';
import Contact from "./Components/Pages/Contact/Contact";
import Admin from './Components/Pages/Admin/Admin';
import RegisterUser from './Components/Pages/RegisterUser/RegisterUser';
import Gallery from './Components/Pages/ImgGalery/ImgGalery';
import Error404 from './Components/Pages/Error404/Error404';
import Login from './Components/Pages/Login/Login';
import Reservas from './Components/Pages/Reservas/Reservas';
import AboutTeam from './Components/Pages/About/Aboutteam';

function App() {
  const [user,setUser]=useState({
    name:"",
    email:"",
    isLoggedIn:false,
    role:"",
    id:""
  })
  const [pagBack,setPagBack]=useState('')

    //   "username": "LucasPrado",
    //   "email": "lukasnahuelprado@gmail.com",
    //   "password": "AaNl0019",
    //   "termsAccepted": true,
    //   "role": "cliente",
    //   "accountActive": true,
    //   "id": 2
    // },
  return (
    <Router>
      {console.log(user)}
      <div className="App">
        <Navbar user={user} setUser={setUser}/>
        <Routes>
        <Route path="/" element={<HomePage user={user} />} />
          <Route path="/registro" element={<RegisterUser />} />
          <Route path="/AboutTeam" element={<AboutTeam />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ImgGalery" element={<Gallery />} />
          <Route path="*" element={<Error404 />} /> {/* Ruta para manejar cualquier otra ruta */}
          <Route path='/reserve' element={<Reservas/>}/>
          <Route 
          path='reserve' 
          element={<PrivateRoute isAllowed={user.isLoggedIn} isAdmin={user.role==="Administrador"}>
          <Admin/> 
          </PrivateRoute>}
          />;
          <Route 
          path='Admin' 
          element={<PrivateRoute isAllowed={user.isLoggedIn} isAdmin={user.role==="administrador"}>
          <Admin/> 
          </PrivateRoute>}
          />;
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
