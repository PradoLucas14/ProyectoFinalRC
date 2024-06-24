import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/Home/HomePage/HomePage';
import Navbar from './Components/Layout/Header/NavBar/NavBar';
import Footer from './Components/Layout/Footer/Footer/Footer';
import RegisterUser from './Components/Pages/RegisterUser/RegisterUser'
import Error404 from './Components/Pages/Error404/Error404'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registro" element={<RegisterUser/>} />
          {/* Añade más rutas según la estructura de tu aplicación */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

