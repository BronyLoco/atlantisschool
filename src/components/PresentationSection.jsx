import React from 'react';
import { Container, Typography, Grid, Box, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR EL HOOK =====

// Importamos los iconos
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupsIcon from '@mui/icons-material/Groups';

// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ===== CAMBIO 2: LOS DATOS DE TEXTO SE HAN MOVIDO A LOS JSON. AHORA SOLO GUARDAMOS LOS ICONOS. =====
const pillarIcons = [
  <SchoolIcon fontSize="large" />, 
  <ExploreIcon fontSize="large" />, 
  <GroupsIcon fontSize="large" />
];

const carouselImages = [
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
  'https://plainbibleteaching.com/wp-content/uploads/2014/09/sunlight-ocean1.jpg',
  'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
  'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
  'https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PresentationSection = () => {
  // ===== CAMBIO 3: USAR EL HOOK Y OBTENER LOS DATOS DEL JSON =====
  const { t } = useTranslation();
  const pillars = t('presentationSection.pillars', { returnObjects: true });

  return (
    <Box sx={(theme) => ({
      py: 10,
      background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.light})`
    })}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              
              <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700, textTransform: 'uppercase' }}>
                {/* ===== CAMBIO 4: TRADUCCIÓN DEL SUBTÍTULO ===== */}
                {t('presentationSection.philosophy')}
              </Typography>
              
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontFamily: 'Playfair Display, serif', color: 'primary.main', fontWeight: 700, mb: 3 }}
              >
                {/* ===== CAMBIO 5: TRADUCCIÓN DEL TÍTULO PRINCIPAL ===== */}
                {t('presentationSection.title')}
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary', mb: 4 }}>
                {/* ===== CAMBIO 6: TRADUCCIÓN DE LA DESCRIPCIÓN ===== */}
                {t('presentationSection.description')}
              </Typography>
              
              <Box component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {/* ===== CAMBIO 7: MAPEAR SOBRE LOS DATOS OBTENIDOS DEL JSON ===== */}
                {pillars.map((pillar, index) => (
                  <Box component={motion.div} variants={itemVariants} key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Box sx={{ mr: 2, color: 'primary.main' }}>
                      {/* Asociamos el icono por su índice */}
                      {pillarIcons[index]}
                    </Box>
                    <Box>
                      {/* Usamos el título y descripción del objeto 'pillar' traducido */}
                      <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Montserrat, sans-serif' }}>{pillar.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{pillar.description}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Button 
                component={RouterLink}
                to="/nuestra-mision"
                variant="contained" 
                size="large" 
                color="secondary"
                sx={{ mt: 4, fontWeight: 700, color: 'primary.main' }}
              >
                {/* ===== CAMBIO 8: TRADUCCIÓN DEL TEXTO DEL BOTÓN ===== */}
                {t('presentationSection.buttonText')}
              </Button>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Paper elevation={12} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                <Box sx={{ height: { xs: 300, sm: 400, md: 500 } }}>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    style={{ height: '100%' }}
                  >
                    {carouselImages.map((imgUrl, index) => (
                      <SwiperSlide key={index}>
                        {/* ===== CAMBIO 9: TRADUCCIÓN DEL TEXTO ALT CON INTERPOLACIÓN ===== */}
                        <img src={imgUrl} alt={t('presentationSection.carouselAlt', { number: index + 1 })} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default PresentationSection;