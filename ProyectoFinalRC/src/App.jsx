import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
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
import PrivateRoute from './PrivateRoute';

function App() {
  const [user, setUser] = useState({
    token: null,
    id: null,
    isLoggedIn: false,
    role: null,
  });

  const Logged = localStorage.getItem('Logged');

  const checkLogged = () => {
    if (Logged) {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      setUser({
        token: token,
        id: decoded.userId,
        isLoggedIn: true,
        role: decoded.userRole,
      });
    }
  };

  useEffect(() => {
    checkLogged();
  }, []);

  return (
    <Router>
      {console.log(user)}
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/registro" element={<RegisterUser />} />
          <Route path="/aboutteam" element={<AboutTeam />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imggalery" element={<Gallery />} />
          <Route path="/reserve" element={<Reservas />} />
          <Route 
            path="/admin" 
            element={
              <PrivateRoute isAllowed={user.isLoggedIn} isAdmin={user.role === "Administrador"}>
                <Admin />
              </PrivateRoute>
            } 
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
