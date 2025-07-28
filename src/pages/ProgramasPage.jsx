/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR EL HOOK =====

// Importamos iconos para las áreas de enfoque
import ScienceIcon from '@mui/icons-material/Science'; // STEAM
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Humanidades
import PaletteIcon from '@mui/icons-material/Palette'; // Artes
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Deportes

// ===== CAMBIO 2: EL OBJETO DE DATOS SE ELIMINA. AHORA SOLO MANTENEMOS LOS ICONOS. =====
// Los iconos se mantendrán en el mismo orden que las "áreas" en los archivos JSON.
const areaIcons = [
  <ScienceIcon />,
  <MenuBookIcon />,
  <PaletteIcon />,
  <SportsSoccerIcon />
];

const ProgramasPage = () => {
  const { t } = useTranslation(); // ===== CAMBIO 3: INICIALIZAR EL HOOK =====
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // ===== CAMBIO 4: OBTENER DATOS DIRECTAMENTE DESDE LAS TRADUCCIONES =====
  // Usamos la key para determinar qué objeto de datos cargar.
  const currentDataKey = activeTab === 0 ? 'programasPage.levels.primary' : 'programasPage.levels.secondary';
  const currentData = t(currentDataKey, { returnObjects: true });

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.light' }}>
      <Container maxWidth="lg">
        {/* Encabezado de la página */}
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          {/* ===== CAMBIO 5: TRADUCIR TÍTULO ===== */}
          {t('programasPage.pageTitle')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {/* ===== CAMBIO 6: TRADUCIR SUBTÍTULO ===== */}
          {t('programasPage.pageSubtitle')}
        </Typography>

        {/* Pestañas de Navegación (Tabs) */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            {/* ===== CAMBIO 7: TRADUCIR ETIQUETAS DE LAS PESTAÑAS ===== */}
            <Tab label={t('programasPage.tabPrimary')} />
            <Tab label={t('programasPage.tabSecondary')} />
          </Tabs>
        </Box>

        {/* Contenido de la Pestaña Activa */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 }, borderRadius: '16px', backgroundColor: 'transparent' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
              {/* Los datos ahora vienen del objeto 'currentData' ya traducido */}
              {currentData.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              {currentData.description}
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {currentData.areas.map((area, index) => (
                <Grid item key={index} xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{ mr: 2, color: 'secondary.main' }}>
                      {/* ===== CAMBIO 8: ASIGNAR ICONO POR ÍNDICE ===== */}
                      {areaIcons[index]}
                    </Box>
                    <Box>
                      {/* El título y texto vienen del objeto 'area' ya traducido */}
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{area.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{area.text}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProgramasPage;