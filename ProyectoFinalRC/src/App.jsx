import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './App.css';
import Navbar from './Components/Layout/Header/NavBar/NavBar';
import Footer from './Components/Layout/Footer/Footer';

import PrivateRouter from './routes/PrivateRouter';
import PublicRouter from './routes/PublicRouter';
import { BrowserRouter } from 'react-router-dom';

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
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <BrowserRouter>
        {
          user.isLoggedIn?<PrivateRouter user={user} setUser={setUser}/>:<PublicRouter user={user} setUser={setUser}/>
        }
        </BrowserRouter>
        
        <Footer />
      </div>
  );
}

export default App;