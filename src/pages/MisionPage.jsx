/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography, Box, Paper, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Iconos para los valores
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';

// He elegido una imagen de fondo sutil y abstracta que encaja con una temática de arquitectura/institución
const BACKGROUND_IMAGE_URL = 'https://images.pexels.com/photos/211151/pexels-photo-211151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const valueIcons = [
  <StarIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  <LightbulbIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  <FavoriteIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />
];

const MisionPage = () => {
  const { t } = useTranslation();
  const values = t('misionPage.valuesList', { returnObjects: true });

  if (!Array.isArray(values)) {
    return null;
  }

  const leftValues = values.slice(0, 2);
  const rightValues = values.slice(2, 4);
  const leftIcons = valueIcons.slice(0, 2);
  const rightIcons = valueIcons.slice(2, 4);

  return (
    // ===== CAMBIO CLAVE 1: MODIFICAMOS EL BOX PRINCIPAL =====
    <Box 
      sx={{ 
        py: 8, 
        position: 'relative', // Necesario para la superposición
        overflowX: 'hidden',
        
        // Propiedades del fondo de imagen
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // ¡Este es el efecto de paralaje!

        // La capa de superposición para garantizar el contraste
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(244, 247, 246, 0.92)', // El color de fondo original, pero semitransparente
          zIndex: 1, // La capa va por encima del fondo pero por debajo del contenido
        }
      }}
    >
      {/* ===== CAMBIO CLAVE 2: ASEGURAMOS QUE EL CONTENIDO ESTÉ POR ENCIMA DE LA CAPA ===== */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Encabezado */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'primary.main' }}>
            {t('misionPage.pageTitle')}
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 10, fontFamily: 'Montserrat, sans-serif' }}>
            {t('misionPage.pageSubtitle')}
          </Typography>
        </motion.div>

        {/* Sección de Misión y Visión */}
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mb: 12 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: 'primary.dark', textAlign: 'right' }}>
                  {t('misionPage.missionTitle')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'right' }}>
                  {t('misionPage.missionText')}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Box sx={{ p: 4, borderLeft: { xs: 'none', md: '3px solid' }, borderColor: 'primary.light' }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: 'primary.dark' }}>
                  {t('misionPage.visionTitle')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('misionPage.visionText')}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8 }}>
          <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', color: 'primary.main' }}>
            {t('misionPage.valuesTitle')}
          </Typography>
        </Divider>

        {/* Sección de Valores */}
        <Grid container spacing={{ xs: 5, md: 10 }} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {leftValues.map((value, index) => (
                <motion.div key={value.title} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: index * 0.2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    {leftIcons[index]}
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{value.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{value.description}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {rightValues.map((value, index) => (
                <motion.div key={value.title} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: index * 0.2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: 'row-reverse' }}>
                    {rightIcons[index]}
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{value.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{value.description}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default MisionPage;