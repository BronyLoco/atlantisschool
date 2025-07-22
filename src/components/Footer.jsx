import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        py: 4, // Padding vertical
        px: 2, // Padding horizontal
        mt: 'auto', // Esto empuja el footer hacia abajo en páginas con poco contenido
        backgroundColor: '#003366',
        color: 'white'
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          © {new Date().getFullYear()} Colegio América de Atlantis. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link 
            component={RouterLink} 
            to="/politica-de-privacidad" // Enlace a nuestra página secreta
            color="inherit" 
            underline="hover"
            sx={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Política de Privacidad
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;