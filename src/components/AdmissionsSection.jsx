import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';

// Importamos los iconos que vamos a usar
import DescriptionIcon from '@mui/icons-material/Description';
import ForumIcon from '@mui/icons-material/Forum';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CelebrationIcon from '@mui/icons-material/Celebration';

// Datos para los pasos de admisión
const admissionSteps = [
  { id: 1, icon: <DescriptionIcon sx={{ fontSize: 50 }} />, title: 'Envía tu Solicitud', description: 'Completa nuestro formulario en línea para iniciar esta gran aventura.' },
  { id: 2, icon: <ForumIcon sx={{ fontSize: 50 }} />, title: 'Entrevista Familiar', description: 'Agendaremos una reunión con los padres y el aspirante para conocernos.' },
  { id: 3, icon: <FactCheckIcon sx={{ fontSize: 50 }} />, title: 'Evaluación de Potencial', description: 'Realizamos una evaluación diagnóstica para identificar las habilidades del estudiante.' },
  { id: 4, icon: <CelebrationIcon sx={{ fontSize: 50 }} />, title: 'Bienvenida a Atlantis', description: 'El comité comunicará los resultados. ¡Esperamos darte la bienvenida!' }
];

const AdmissionsSection = () => {
  return (
    // Ahora con fondo blanco para que las tarjetas destaquen más
    <Box sx={{ py: 10, backgroundColor: '#ffffff' }}> 
      <Container>
        {/* Encabezado de la sección, ahora con línea decorativa */}
        <Typography 
          variant="h3" 
          component="h2" 
          textAlign="center"
          sx={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: '#003366',
            position: 'relative',
            pb: 2,
            mb: 3,
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#f0b429',
            }
          }}
        >
          Proceso de Admisión
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 8, fontFamily: 'Montserrat, sans-serif' }}>
          Un camino claro y personal para unirte a nuestra comunidad de exploradores.
        </Typography>

        {/* Grid para los pasos */}
        <Grid container spacing={4} justifyContent="center">
          {admissionSteps.map((step) => (
            <Grid item key={step.id} xs={12} sm={6} md={3}>
              <Paper
                variant="outlined" // Borde sutil
                sx={{
                  p: 4, // Más padding interno
                  textAlign: 'center',
                  height: '100%',
                  position: 'relative', // Necesario para el número de fondo
                  overflow: 'hidden',   // Esconde lo que se sale del número
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  borderColor: 'rgba(0, 0, 0, 0.12)',
                  '&:hover': {
                    borderColor: '#f0b429', // Borde dorado al pasar el cursor
                    boxShadow: '0 10px 20px rgba(0, 51, 102, 0.1)'
                  }
                }}
              >
                {/* 1. Número gigante estilizado en el fondo */}
                <Typography
                  sx={{
                    position: 'absolute',
                    top: -15,
                    right: -10,
                    fontSize: '120px',
                    fontWeight: 800,
                    color: 'rgba(0, 51, 102, 0.05)', // Color muy tenue
                    zIndex: 0,
                    lineHeight: 1
                  }}
                >
                  {`0${step.id}`}
                </Typography>
                
                {/* Contenido principal de la tarjeta */}
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box color="#f0b429" mb={2}>
                    {step.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#003366', minHeight: '56px' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {step.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdmissionsSection;