import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Estado inicial: invisible y 50px más abajo
      whileInView={{ opacity: 1, y: 0 }} // Estado final: visible y en su posición original
      viewport={{ once: true, amount: 0.3 }} // La animación se activa una sola vez cuando el 30% del elemento es visible
      transition={{ duration: 0.8, ease: 'easeOut' }} // Duración y tipo de animación
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;