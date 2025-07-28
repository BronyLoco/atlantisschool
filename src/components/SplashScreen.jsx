/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Importamos la nueva URL del logo desde nuestro archivo de constantes
import { LOGO_URL_TRANSPARENT } from '../constants';

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
          // 2. Usamos el color primario de nuestro tema
          backgroundColor: 'primary.main',
          zIndex: 9999,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* 3. Usamos la nueva constante para la URL del logo */}
          <img 
            src={LOGO_URL_TRANSPARENT} 
            alt="Logo Colegio América de Atlantis" 
            style={{ width: '250px', height: 'auto' }} // Hacemos el logo un poco más grande
          />
        </motion.div>
      </Box>
    </AnimatePresence>
  );
};

export default SplashScreen;