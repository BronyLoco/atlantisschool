import React from 'react';
import { Container, Typography, Grid, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Un icono más elegante que '✓'

// 1. Importaciones de Swiper para React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 2. Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Datos para la lista de puntos clave y las imágenes del carrusel
const philosophyPoints = [
  'Excelencia Académica y Pensamiento Crítico',
  'Innovación y Dominio Tecnológico (STEAM)',
  'Desarrollo del Liderazgo y la Inteligencia Emocional',
  'Integridad, Respeto y Compromiso Comunitario',
];
const carouselImages = [
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
  'https://images.pexels.com/photos/101537/baby-boy-child-model-101537.jpeg',
  'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
  'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
  'https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg',
];

const PresentationSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f4f7f6' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          
          {/* Columna Izquierda: El Texto */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontFamily: 'Playfair Display, serif',
                color: '#003366',
                fontWeight: 700,
                position: 'relative',
                pb: 2,
                mb: 3,
                '&::after': { // La línea decorativa
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '80px',
                  height: '4px',
                  backgroundColor: '#f0b429',
                }
              }}
            >
              Nuestra Filosofía: Un Océano de Saber
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
              En el Colegio América de Atlantis, no solo impartimos conocimiento, inspiramos la grandeza. Fusionamos la excelencia académica con una cultura de descubrimiento, preparando a nuestros alumnos para ser ciudadanos del mundo.
            </Typography>
            <List>
              {philosophyPoints.map((point, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5, color: '#003366' }}>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={point} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Columna Derecha: El Carrusel */}
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '450px', borderRadius: '10px', overflow: 'hidden', boxShadow: 3 }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]} // 3. Módulos que usaremos
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={{ height: '100%' }}
              >
                {carouselImages.map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <img src={imgUrl} alt={`Carrusel imagen ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default PresentationSection;