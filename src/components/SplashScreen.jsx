import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// ===== ¡AQUÍ ESTÁ LA NUEVA URL FUNCIONAL DEL LOGO! =====
const logoUrl = 'https://i.ibb.co/prW8dKV3/logo.png';

const SplashScreen = ({ onLoaded }) => {
  useEffect(() => {
    // Simulamos un tiempo de carga de 2.5 segundos
    const timer = setTimeout(() => {
      onLoaded();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#003366',
          zIndex: 9999,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          // ===== ¡AQUÍ ESTÁ EL ARREGLO DE LA ANIMACIÓN! =====
          transition={{ duration: 1.5, ease: "easeOut" }} // Cambiamos la curva compleja por una estándar
        >
          <img src={logoUrl} alt="Logo" style={{ width: '200px' }} />
        </motion.div>
      </Box>
    </AnimatePresence>
  );
};

export default SplashScreen;