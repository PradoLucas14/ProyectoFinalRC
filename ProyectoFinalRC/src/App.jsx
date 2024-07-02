import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/Home/HomePage/HomePage';
import Navbar from './Components/Layout/Header/NavBar/NavBar';
import Footer from './Components/Layout/Footer/Footer';
import Contact from "./Components/Pages/Contact/Contact";
import RegisterUser from './Components/Pages/RegisterUser/RegisterUser';
import Gallery from './Components/Pages/ImgGalery/ImgGalery';
import Error404 from './Components/Pages/Error404/Error404';
import Login from './Components/Pages/Login/Login';
import Reservas from './Components/Pages/Reservas/Reservas';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/HomePage" element={<HomePage />} />{/*creo qque esta ruta esta de mas porque incio seria '/'*/}
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ImgGalery" element={<Gallery />} />
          <Route path="*" element={<Error404 />} /> {/* Ruta para manejar cualquier otra ruta */}
          <Route path='/reserve' element={<Reservas/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
