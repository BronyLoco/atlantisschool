/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Iconos para los valores
import StarIcon from '@mui/icons-material/Star'; // Excelencia
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // Innovación
import FavoriteIcon from '@mui/icons-material/Favorite'; // Integridad
import PeopleIcon from '@mui/icons-material/People'; // Comunidad

const MisionPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f4f7f6' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#003366' }}>
            Nuestra Esencia
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 8, fontFamily: 'Montserrat, sans-serif' }}>
            Los principios que guían cada paso de nuestro viaje educativo.
          </Typography>
        </motion.div>

        {/* Sección de Misión y Visión */}
        <Grid container spacing={5} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: '16px', height: '100%' }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: '#003366' }}>Misión</Typography>
              <Typography variant="body1" color="text.secondary">
                Brindar una educación integral de excelencia, fomentando la curiosidad intelectual, la integridad ética y el compromiso social, para que cada estudiante descubra y desarrolle su máximo potencial en un entorno globalizado.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: '16px', height: '100%' }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: '#003366' }}>Visión</Typography>
              <Typography variant="body1" color="text.secondary">
                Ser un referente educativo reconocido por nuestra innovación pedagógica y por formar ciudadanos del mundo, capaces de liderar con sabiduría, creatividad y empatía.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Sección de Valores */}
        <Box textAlign="extend" sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', color: '#003366', mb: 4 }}>Nuestros Valores Fundamentales</Typography>
          <Grid container spacing={4}>
            {/* Valor 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <StarIcon sx={{ fontSize: 40, color: '#f0b429' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>Excelencia</Typography>
                <Typography variant="body2" color="text.secondary">La búsqueda constante de la superación académica y personal.</Typography>
              </Box>
            </Grid>
            {/* Valor 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <LightbulbIcon sx={{ fontSize: 40, color: '#f0b429' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>Innovación</Typography>
                <Typography variant="body2" color="text.secondary">Fomentar la curiosidad, el descubrimiento y la pasión por aprender.</Typography>
              </Box>
            </Grid>
            {/* Valor 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <FavoriteIcon sx={{ fontSize: 40, color: '#f0b429' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>Integridad</Typography>
                <Typography variant="body2" color="text.secondary">Actuar con honestidad, respeto y responsabilidad en todo momento.</Typography>
              </Box>
            </Grid>
            {/* Valor 4 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <PeopleIcon sx={{ fontSize: 40, color: '#f0b429' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>Comunidad</Typography>
                <Typography variant="body2" color="text.secondary">Construir lazos sólidos basados en la colaboración y el apoyo mutuo.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MisionPage;