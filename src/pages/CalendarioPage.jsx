import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const CalendarioPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.light' }}>
      <Container maxWidth="lg">
        {/* Encabezado de la página */}
        <Typography 
          variant="h3" 
          component="h1" 
          textAlign="center"
          gutterBottom
          sx={{ color: 'primary.main' }}
        >
          Calendario Académico
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Aquí encontrarás todas las fechas importantes, eventos y periodos de vacaciones de nuestro año escolar.
        </Typography>

        {/* Contenedor del Calendario */}
        <Paper 
          elevation={4} 
          sx={{ 
            borderRadius: '16px', 
            overflow: 'hidden', // Esconde los bordes del iframe
            height: '75vh', // Altura relativa a la pantalla
            minHeight: '600px' // Altura mínima para que no sea muy pequeño
          }}
        >
          {/* ===== PEGA TU CÓDIGO DE GOOGLE CALENDAR AQUÍ DENTRO ===== */}
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=9a0b96e950d2a85e5999e1f77b97f1bbe13387ea43db044ceb00f2a071f86037%40group.calendar.google.com&ctz=America%2FLa_Paz" 
            style={{ border: 0 }} 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no"
          ></iframe>
        </Paper>
      </Container>
    </Box>
  );
};

export default CalendarioPage;