import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
import Navbar from './Components/Layout/Header/NavBar/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Components/Layout/Footer/Footer';
import PrivateRoute from './PrivateRoute';
import Reservas from './Components/Pages/Reservas/Reservas';
import LoginPage from './Components/Pages/Login/Login';
import HomePage from './Components/Pages/Home/HomePage/HomePage';
import RegisterForm from './Components/Pages/RegisterUser/RegisterUser';
import AboutTeam from './Components/Pages/About/Aboutteam';
import Contact from './Components/Pages/Home/Contact/Contact';
import Gallery from './Components/Pages/ImgGalery/ImgGalery';
import Error404 from './Components/Pages/Error404/Error404';
import Admin from './Components/Pages/Admin/CrudUsers';

function App() {
  const [user, setUser] = useState({
    token: null,
    id: null,
    isLoggedIn: false,
    role: null,
  });

  const checkLogged = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.clear();
        setUser({
          token: null,
          id: null,
          isLoggedIn: false,
          role: null,
        });
      } else {
        setUser({
          token: token,
          id: decoded.userId,
          isLoggedIn: true,
          role: decoded.userRole,
        });
      }
    }
  };

  useEffect(() => {
    checkLogged();
    const handleBeforeUnload = (event) => {
      if (!event.persisted) {
        localStorage.clear();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    checkLogged();
  }, []);

  return (
    <div className="App">
      {console.log(user)}
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Navigate to={"/Home"} />} />
        <Route path='/Home' element={<HomePage user={user} />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/AboutTeam" element={<AboutTeam />} />
        <Route path="/Login" element={<LoginPage setUser={setUser} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Galery" element={<Gallery />} />
        <Route path='/Reserve' 
          element={
            <PrivateRoute isAllowed={user.isLoggedIn}><Reservas /></PrivateRoute>
          } 
        />
        <Route path='/Admin' 
          element={
            <PrivateRoute isAllowed={user.isLoggedIn && user.role === "administrador"}><Admin /></PrivateRoute>
          } 
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;