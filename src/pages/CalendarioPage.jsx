import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOK =====

const CalendarioPage = () => {
  const { t } = useTranslation(); // ===== CAMBIO 2: INICIALIZAR HOOK =====

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
          {t('calendarioPage.pageTitle')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('calendarioPage.pageSubtitle')}
        </Typography>

        {/* Contenedor del Calendario */}
        <Paper 
          elevation={4} 
          sx={{ 
            borderRadius: '16px', 
            overflow: 'hidden',
            height: '75vh',
            minHeight: '600px'
          }}
        >
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=9a0b96e950d2a85e5999e1f77b97f1bbe13387ea43db044ceb00f2a071f86037%40group.calendar.google.com&ctz=America%2FLa_Paz" 
            style={{ border: 0 }} 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no"
            title={t('calendarioPage.iframeTitle')} // ===== CAMBIO 3: AÑADIR TÍTULO ACCESIBLE Y TRADUCIBLE =====
          ></iframe>
        </Paper>
      </Container>
    </Box>
  );
};

export default CalendarioPage;