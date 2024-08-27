import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Admin from '../Components/Pages/Admin/CrudUsers';
import Reservas from '../Components/Pages/Reservas/Reservas';
import Error404 from '../Components/Pages/Error404/Error404';

import HomePage from '../Components/Pages/Home/HomePage/HomePage';

const PrivateRouter = ({user,setUser}) => {
  return (
    <Routes>
      <Route path="/reserve" element={<Reservas/>} />
      <Route path="/" element={<HomePage user={user} />} />
      {/* <Route 
            path="/admin" 
            element={
              <PrivateRouter isAllowed={user.isLoggedIn} isAdmin={user.role === "Administrador"}>
                <Admin />
              </PrivateRouter>
            } 
          /> */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default PrivateRouter;