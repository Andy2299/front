// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
// import PreguntaVehiculos from './pages/VehiculoDeseado';

// import NosotrosPages from './pages/Nosotros';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/userhome" element={<UserHome />} />
      {/* <Route path="/vehiculodeseado" element={<PreguntaVehiculos />} />
      <Route path="/nosotros" element={<NosotrosPages />} /> */}
    </Routes>
  );
};

export default AppRoutes;