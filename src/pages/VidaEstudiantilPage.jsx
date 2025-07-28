/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { Container, Typography, Box, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const sectionAssets = [
  { image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { image: 'https://images.pexels.com/photos/298240/pexels-photo-298240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const VidaEstudiantilPage = () => {
  const { t } = useTranslation();

  const sections = useMemo(() => {
    const translatedData = t('vidaEstudiantilPage.sectionsList', { returnObjects: true });
    if (!Array.isArray(translatedData)) return [];
    return sectionAssets.map((asset, index) => ({
      ...asset,
      ...translatedData[index]
    }));
  }, [t]);

  // Necesitamos el 'index' para la lógica del zigzag
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default', overflowX: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          {t('vidaEstudiantilPage.pageTitle')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 10 }}>
          {t('vidaEstudiantilPage.pageSubtitle')}
        </Typography>

        {sections.map((section, index) => (
          <Grid
            container
            key={section.title}
            spacing={{ xs: 4, md: 8 }}
            alignItems="center"
            // ===== PASO 1: RE-INTRODUCIMOS LA LÓGICA DEL ZIGZAG =====
            direction={index % 2 !== 0 ? 'row-reverse' : 'row'}
            sx={{ 
              mb: 12,
              // ===== PASO 2: MANTENEMOS LA SOLUCIÓN CLAVE QUE HACE QUE TODO FUNCIONE =====
              flexWrap: { xs: 'wrap', md: 'nowrap' } 
            }}
          >
            {/* Las columnas vuelven a ser simples, el contenedor se encarga de todo */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Box>
                  <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                    {section.description}
                  </Typography>
                  <List>
                    {section.points.map((point, i) => (
                      <ListItem key={i} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5, color: 'secondary.main' }}>
                          <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <Typography>{point}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Box sx={{ height: { xs: 300, sm: 400 }, borderRadius: '16px', boxShadow: 8, overflow: 'hidden' }}>
                  <Box
                    component="img"
                    src={section.image}
                    alt={t('vidaEstudiantilPage.altText', { title: section.title })}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default VidaEstudiantilPage;