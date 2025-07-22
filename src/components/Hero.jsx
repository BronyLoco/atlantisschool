import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

// URL del logo transparente
const logoUrl = 'https://i.ibb.co/prW8dKV3/logo.png';

// URL del video de fondo. He elegido uno de olas suaves que funciona perfectamente en bucle.
const videoBackgroundUrl = 'https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4';

const Hero = () => {
  return (
    <Box 
      sx={{
        height: '90vh',
        position: 'relative', // Contenedor principal debe ser relativo
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden' // Esconde cualquier parte del video que se salga
      }}
    >
      {/* Etiqueta de Video para el fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline // Importante para móviles
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          objectFit: 'cover', // Asegura que el video cubra todo el espacio
          transform: 'translate(-50%, -50%)',
          zIndex: -1 // Lo pone detrás de todo el contenido
        }}
      >
        <source src={videoBackgroundUrl} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* Capa oscura para legibilidad */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 31, 63, 0.5)' }} />
      
      <Container sx={{ position: 'relative' }}> {/* El contenido debe ser relativo para estar por encima */}
        <Box mb={4}>
          <img 
            src={logoUrl} 
            alt="Logo del Colegio América de Atlantis" 
            style={{ width: '150px', height: 'auto' }}
          />
        </Box>
        
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#f0b429' }}
        >
          Descubre un océano de posibilidades.
        </Typography>
        <Typography 
          variant="h5" 
          component="p"
          sx={{ fontFamily: 'Montserrat, sans-serif', mb: 4 }}
        >
          Innovación, excelencia y profundidad humana.
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            backgroundColor: '#f0b429',
            color: '#003366',
            '&:hover': { backgroundColor: '#ffc107' }
          }}
        >
          Inicia tu Aventura
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;