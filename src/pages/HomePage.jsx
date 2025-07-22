import React from 'react';
import Hero from '../components/Hero';
import PresentationSection from '../components/PresentationSection'; // <-- 1. Importa el componente

const HomePage = () => {
  return (
    <>
      <Hero />
      <PresentationSection /> {/* <-- 2. Añade el componente aquí */}
      {/* Aquí podríamos añadir más secciones si quisiéramos */}
    </>
  );
};

export default HomePage;