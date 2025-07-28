/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOK =====

// Iconos para los puntos destacados
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScienceIcon from '@mui/icons-material/Science';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

// ===== CAMBIO 2: CREAR UN ARRAY DE ICONOS PARA ASOCIARLOS DINÁMICAMENTE =====
const highlightIcons = [
  <LibraryBooksIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />,
  <ScienceIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />,
  <NaturePeopleIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
];

const TourPage = () => {
  // ===== CAMBIO 3: INICIALIZAR i18next Y OBTENER LA LISTA DE DESTACADOS =====
  const { t } = useTranslation();
  const highlights = t('tourPage.highlightsList', { returnObjects: true });

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
            {t('tourPage.pageTitle')}
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            {t('tourPage.pageSubtitle')}
          </Typography>
        </motion.div>

        {/* Contenedor del Tour Virtual */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <Paper 
            elevation={12} 
            sx={{ 
              height: '70vh',
              minHeight: '500px',
              borderRadius: '16px', 
              overflow: 'hidden',
              mb: 8
            }}
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://kuula.co/share/collection/7v11b?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1" 
              frameBorder="0" 
              allowFullScreen 
              allow="xr-spatial-tracking; vr; fullscreen; accelerometer; magnetometer; gyroscope; webvr; webxr" 
              scrolling="no"
              style={{ border: 0 }}
              title={t('tourPage.iframeTitle')} // ===== CAMBIO 4: AÑADIR TÍTULO ACCESIBLE =====
            ></iframe>
          </Paper>
        </motion.div>

        {/* Sección de Puntos Destacados */}
        <Box textAlign="center">
          <Typography variant="h4" component="h2" sx={{ color: 'primary.main', mb: 4 }}>
            {t('tourPage.highlightsTitle')}
          </Typography>
          <Grid container spacing={4}>
            {/* ===== CAMBIO 5: REEMPLAZAR BLOQUES REPETIDOS POR UN MAP ===== */}
            {highlights.map((highlight, index) => (
              <Grid item xs={12} md={4} key={highlight.title}>
                {highlightIcons[index]}
                <Typography variant="h6" fontWeight="bold">{highlight.title}</Typography>
                <Typography color="text.secondary">{highlight.description}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Llamada a la Acción Final */}
        <Box textAlign="center" mt={8}>
          <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
            {t('tourPage.ctaTitle')}
          </Typography>
          <Button 
            component={RouterLink}
            to="/admisiones"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ color: 'primary.main', fontWeight: 'bold' }}
          >
            {t('tourPage.ctaButton')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TourPage;