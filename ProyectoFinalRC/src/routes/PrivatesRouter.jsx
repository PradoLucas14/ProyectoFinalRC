import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Reservas from '../Components/Pages/Reservas/Reservas';
import Error404 from '../Components/Pages/Error404/Error404';

import HomePage from '../Components/Pages/Home/HomePage/HomePage';
import PrivRouter from './PrivRouter';
import Admin from '../Components/Pages/Admin/CrudUsers';

const PrivateRouter = ({user,setUser}) => {
  return (
    <Routes>
      <Route path="/reserve" element={<Reservas/>} />
      <Route path="/" element={<HomePage user={user} />} />
       {/* <Route 
            path="/Admin" 
            element={
              <PrivRouter isAllowed={user.Admin==="administrador"} >
                <Admin />
              </PrivRouter>
            } 
          />  */}
      <Route path="/Admin" element={<Admin/>} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default PrivateRouter;