import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// ¡CAMBIO IMPORTANTE! Usaremos NavLink en lugar de Link para detectar la página activa.
import { NavLink } from 'react-router-dom';

// URL del logo en blanco para el Navbar. Es PNG transparente.
const logoNavbarUrl = 'https://i.ibb.co/prW8dKV3/logo.png';

const Navbar = () => {
  return (
    <AppBar 
      position="sticky" // 1. Para que se quede fijo en la parte superior
      elevation={0}
      sx={{
        // 2. Efecto Glassmorphism: fondo semitransparente + desenfoque
        backgroundColor: 'rgba(0, 51, 102, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)' // Una línea sutil para separar
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        
        {/* 3. Logo + Nombre del Colegio Juntos */}
        <Box 
          component={NavLink} 
          to="/" 
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}
        >
          <img 
            src={logoNavbarUrl} 
            alt="Logo Colegio América de Atlantis"
            style={{ height: '45px', display: 'block' }} // Un poco más pequeño y elegante
          />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              ml: 2, // Margen a la izquierda para separarlo del logo
              display: { xs: 'none', sm: 'block' } // Ocultamos el texto en pantallas muy pequeñas
            }}
          >
            Colegio América de Atlantis
          </Typography>
        </Box>

        {/* 4. Enlaces de Navegación con Indicador de Página Activa */}
        <Box>
          <Button 
            component={NavLink} 
            to="/noticias" 
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              color: 'white',
              '&.active': { color: '#f0b429' } // Si el enlace está activo, se pinta de dorado
            }}
          >
            Noticias
          </Button>
          <Button component={NavLink} to="/docentes" sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', '&.active': { color: '#f0b429' } }}>
            Docentes
          </Button>
          <Button component={NavLink} to="/admisiones" sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', '&.active': { color: '#f0b429' } }}>
            Admisiones
          </Button>
          <Button component={NavLink} to="/donde-estamos" sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', '&.active': { color: '#f0b429' } }}>
            Donde Estamos
          </Button>
          <Button component={NavLink} to="/faq" sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', '&.active': { color: '#f0b429' } }}>
            Preguntas
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;