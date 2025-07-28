/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

// Iconos para los puntos destacados
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScienceIcon from '@mui/icons-material/Science';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

const TourPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Encabezado */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
            Tour Virtual 360°
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Explora las instalaciones del Colegio América de Atlantis desde donde estés. Haz clic y arrastra para moverte.
          </Typography>
        </motion.div>

        {/* Contenedor del Tour Virtual */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <Paper 
            elevation={12} 
            sx={{ 
              height: '70vh', // Ocupa una gran parte de la pantalla
              minHeight: '500px',
              borderRadius: '16px', 
              overflow: 'hidden',
              mb: 8
            }}
          >
            {/* Código incrustado de un tour de Kuula.co */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://kuula.co/share/collection/7v11b?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1" 
              frameBorder="0" 
              allowFullScreen 
              allow="xr-spatial-tracking; vr; fullscreen; accelerometer; magnetometer; gyroscope; webvr; webxr" 
              scrolling="no"
              style={{ border: 0 }}
            ></iframe>
          </Paper>
        </motion.div>

        {/* Sección de Puntos Destacados */}
        <Box textAlign="center">
          <Typography variant="h4" component="h2" sx={{ color: 'primary.main', mb: 4 }}>
            Puntos Destacados del Campus
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <LibraryBooksIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">Biblioteca del Saber</Typography>
              <Typography color="text.secondary">Un espacio moderno con miles de volúmenes y recursos digitales.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <ScienceIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">Laboratorios de Innovación</Typography>
              <Typography color="text.secondary">Equipados con la última tecnología para nuestros programas STEAM.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <NaturePeopleIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold">Áreas Comunes y Jardines</Typography>
              <Typography color="text.secondary">Espacios diseñados para la colaboración, el descanso y la inspiración.</Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Llamada a la Acción Final */}
        <Box textAlign="center" mt={8}>
          <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
            ¿Impresionado? Da el siguiente paso.
          </Typography>
          <Button 
            component={RouterLink}
            to="/admisiones"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ color: 'primary.main', fontWeight: 'bold' }}
          >
            Ir a Admisiones
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TourPage;