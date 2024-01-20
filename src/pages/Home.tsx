import React, { useState } from 'react';
import NavbarMenu from '../components/Navbar.jsx';
import NavbarMap from '../components/NavbarMap.js';
import AlertCards from '../components/AlertsCards.js';
import iconAlert from '../imgs/icons/alerts.svg';
import iconArrowLeft from '../imgs/icons/arrowLeft.svg';
// Ejemplo de datos de incidentes
const incidentsData = [
  {
    date: '01/01/24',
    title: 'Avería en carretera',
    address: 'Calle 33, municipio 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed...'
  },
  {
    date: '01/01/24',
    title: 'Avería en carretera',
    address: 'Calle 33, municipio 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed...'
  },
  {
    date: '01/01/24',
    title: 'Avería en carretera',
    address: 'Calle 33, municipio 1',
    description: 'Lorem ipsum dolor sit amet consectetur. Viverra sem ullamcorper imperdiet amet pellentesque sed...'
  },
];

const HomePage: React.FC = () => {
  const [showAlerts, setShowAlerts] = useState(false); // Estado para controlar la visibilidad de AlertCards

  return (
    <div>
      <NavbarMenu />
      <NavbarMap />
      <button className="alert-button" onClick={() => setShowAlerts(!showAlerts)}>
        {showAlerts ? <img className='imgIcon2' src={iconArrowLeft} alt="icon Alertas" /> : <img className='imgIcon' src={iconAlert} alt="icon Alertas" />}
    
      </button>
      {showAlerts && <AlertCards incidents={incidentsData} />} {/* Renderizado condicional de AlertCards */}
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;