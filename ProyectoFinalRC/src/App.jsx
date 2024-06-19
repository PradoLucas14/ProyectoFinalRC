import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/Home/HomePage/HomePage';
import Navbar from './Components/Layout/Header/NavBar/NavBar';
import Footer from './Components/Layout/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Agrega más rutas según tu estructura de aplicación */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

