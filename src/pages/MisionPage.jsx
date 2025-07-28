/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR EL HOOK =====

// Iconos para los valores
import StarIcon from '@mui/icons-material/Star'; // Excelencia
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // Innovación
import FavoriteIcon from '@mui/icons-material/Favorite'; // Integridad
import PeopleIcon from '@mui/icons-material/People'; // Comunidad

// ===== CAMBIO 2: CREAR UN ARRAY DE ICONOS. SU ORDEN DEBE COINCIDIR CON EL JSON. =====
const valueIcons = [
  <StarIcon sx={{ fontSize: 40, color: '#f0b429' }} />,
  <LightbulbIcon sx={{ fontSize: 40, color: '#f0b429' }} />,
  <FavoriteIcon sx={{ fontSize: 40, color: '#f0b429' }} />,
  <PeopleIcon sx={{ fontSize: 40, color: '#f0b429' }} />
];

const MisionPage = () => {
  // ===== CAMBIO 3: INICIALIZAR i18next Y OBTENER LA LISTA DE VALORES =====
  const { t } = useTranslation();
  const values = t('misionPage.valuesList', { returnObjects: true });

  return (
    <Box sx={{ py: 8, backgroundColor: '#f4f7f6' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'primary.main' }}>
            {/* ===== CAMBIO 4: TEXTO TRADUCIDO ===== */}
            {t('misionPage.pageTitle')}
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 8, fontFamily: 'Montserrat, sans-serif' }}>
            {/* ===== CAMBIO 5: TEXTO TRADUCIDO ===== */}
            {t('misionPage.pageSubtitle')}
          </Typography>
        </motion.div>

        {/* Sección de Misión y Visión */}
        <Grid container spacing={5} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: '16px', height: '100%' }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: 'primary.dark' }}>
                {t('misionPage.missionTitle')}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t('misionPage.missionText')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: '16px', height: '100%' }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: 'primary.dark' }}>
                {t('misionPage.visionTitle')}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t('misionPage.visionText')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Sección de Valores */}
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', color: 'primary.main', mb: 4 }}>
            {t('misionPage.valuesTitle')}
          </Typography>
          <Grid container spacing={4}>
            {/* ===== CAMBIO 6: REEMPLAZAR BLOQUES REPETIDOS POR UN MAP ===== */}
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <Box>
                  {valueIcons[index]}
                  <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>{value.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{value.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MisionPage;