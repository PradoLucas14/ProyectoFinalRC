import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivRouter = ({isAllowed,children}) => {
  if(!isAllowed){
    return <Navigate to='/'/>
  }
  else{
    return children
  }
    
}

export default PrivRouter