import React from 'react';
import Hero from '../components/Hero';
import PresentationSection from '../components/PresentationSection';
import AnimatedSection from '../components/AnimatedSection'; // <-- 1. Importa el componente

const HomePage = () => {
  return (
    <>
      <Hero />
      <AnimatedSection> {/* <-- 2. Envuelve la sección */}
        <PresentationSection />
      </AnimatedSection>
    </>
  );
};

export default HomePage;