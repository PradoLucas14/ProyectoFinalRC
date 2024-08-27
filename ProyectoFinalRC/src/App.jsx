import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './App.css';
import Navbar from './Components/Layout/Header/NavBar/NavBar';
import Footer from './Components/Layout/Footer/Footer';

import PrivateRouter from './routes/PrivateRouter';
import PublicRouter from './routes/PublicRouter';

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
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        {
          user.isLoggedIn?<PrivateRouter user={user} setUser={setUser}/>:<PublicRouter user={user} setUser={setUser}/>
        }
        <Footer />
      </div>
    </Router>
  );
}

export default App;