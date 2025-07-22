import React from 'react';
import { Typography, Box, Paper, Link } from '@mui/material';

// Importamos los iconos
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DondeEstamosPage = () => {
  return (
    // 1. Contenedor principal que ocupa toda la altura disponible y posiciona elementos
    <Box 
      sx={{ 
        height: 'calc(100vh - 68.5px)', // Altura de la pantalla menos la altura del Navbar
        position: 'relative', // Necesario para posicionar la tarjeta flotante
        overflow: 'hidden' // Evita barras de scroll innecesarias
      }}
    >
      {/* 2. El Mapa ocupando todo el espacio como fondo */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34839824.28827725!2d-122.109375!3d-48.876667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a9f635c49610e59%3A0x2f523a54e963428d!2sPolo%20oce%C3%A1nico%20de%20inaccesibilidad!5e0!3m2!1ses!2ses!4v1668518981445!5m2!1ses!2ses" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      {/* 3. La Tarjeta Flotante */}
      <Paper
        elevation={12} // Sombra pronunciada para que destaque
        sx={{
          position: 'absolute',
          top: '50%', // Centrada verticalmente
          left: '5%',   // Posicionada a la izquierda
          transform: 'translateY(-50%)', // Ajuste fino para centrarla perfectamente
          p: 4,
          maxWidth: '400px',
          // Efecto Glassmorphism
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#003366' }}
        >
          Nuestra Isla del Saber
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Encuentra nuestras coordenadas y los canales para comunicarte con nosotros.
        </Typography>
        
        {/* Información de contacto */}
        <Box display="flex" alignItems="center" mb={2}>
          <LocationOnIcon sx={{ mr: 1.5, color: '#003366' }} />
          <Typography variant="body2" color="text.primary">Punto Nemo, Océano Pacífico Sur</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <EmailIcon sx={{ mr: 1.5, color: '#003366' }} />
          <Link href="mailto:contacto@colegioatlantis.com" color="text.primary" underline="hover">
            contacto@colegioatlantis.com
          </Link>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <PhoneIcon sx={{ mr: 1.5, color: '#003366' }} />
          <Link href="tel:+34123456789" color="text.primary" underline="hover">
            +34 123 456 789
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <AccessTimeIcon sx={{ mr: 1.5, color: '#003366' }} />
          <Typography variant="body2" color="text.primary">Siempre abiertos al conocimiento</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default DondeEstamosPage;