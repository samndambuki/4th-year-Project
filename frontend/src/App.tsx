import React, { useState } from 'react';
import './App.css';
import { claim } from './auth/auth.models';
import AuthenticationContext from './auth/AuthenticationContext';
import { Routing } from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';


function App() {

  const[claims,setClaims] = useState<claim[]>([
    {name:'email',value:'sam.ndambuki@outlook.com'},

  ]);

  function isDoctor(){
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'doctor') > -1;

  }
  
  return (
    <div className="page-container">
      <AuthenticationContext.Provider value={{claims,update:setClaims}}>
    <Routing/>
    </AuthenticationContext.Provider>
    </div>
  );
}

export default App;
