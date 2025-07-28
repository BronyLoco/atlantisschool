/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';

// Importamos iconos
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const sectionsData = [
  // ... (tus datos de sectionsData no cambian) ...
  { title: 'Clubes y Organizaciones', description: 'Fomentamos las pasiones y el liderazgo más allá del aula. Nuestros clubes son espacios vibrantes donde los estudiantes exploran sus intereses, colaboran en proyectos y desarrollan habilidades para toda la vida.', points: ['Club de Robótica Marina "Nautilus"', 'Equipo de Debate "Los Argonautas"', 'Sociedad de Ciencias y Astronomía', 'Taller de Arte y Medios Digitales'], image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Deportes y Bienestar', description: 'Creemos en el principio de "mente sana en cuerpo sano". Nuestros programas deportivos no solo buscan la excelencia competitiva, sino también enseñar valores como la disciplina, la resiliencia y el trabajo en equipo.', points: ['Equipos de Fútbol y Baloncesto', 'Clases de Natación y Atletismo', 'Programa de Yoga y Mindfulness', 'Torneos Intercolegiales Anuales'], image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Eventos y Tradiciones', description: 'La vida en Atlantis está llena de momentos memorables que unen a nuestra comunidad. Desde ferias científicas hasta conciertos, cada evento es una oportunidad para celebrar nuestros logros y nuestra diversidad.', points: ['Feria Anual de Ciencias e Innovación', 'Semana de las Culturas del Mundo', 'Conciertos de Temporada', 'Jornadas de Voluntariado y Acción Social'], image: 'https://images.pexels.com/photos/298240/pexels-photo-298240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const VidaEstudiantilPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default', overflowX: 'hidden' }}> {/* Ocultamos overflow horizontal */}
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          Vida Estudiantil
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 10 }}>
          Descubre el corazón de nuestra comunidad: un lugar para crecer, competir y crear.
        </Typography>

        {sectionsData.map((section, index) => {
          // Creamos los componentes de las columnas para reutilizarlos
          const ImageColumn = (
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <Paper elevation={8} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <Box component="img" src={section.image} alt={section.title} sx={{ width: '100%', display: 'block' }} />
                </Paper>
              </motion.div>
            </Grid>
          );

          const TextColumn = (
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
                  {section.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                  {section.description}
                </Typography>
                <List>
                  {section.points.map((point, i) => (
                    <ListItem key={i} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5, color: 'secondary.main' }}><CheckCircleOutlineIcon /></ListItemIcon>
                      <Typography>{point}</Typography>
                    </ListItem>
                  ))}
                </List>
              </motion.div>
            </Grid>
          );

          return (
            // ===== LA LÓGICA DE ZIG-ZAG ESTÁ AQUÍ =====
            <Grid container key={section.title} spacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ mb: 10 }}>
              {index % 2 === 0 ? (
                <>
                  {ImageColumn}
                  {TextColumn}
                </>
              ) : (
                <>
                  {TextColumn}
                  {ImageColumn}
                </>
              )}
            </Grid>
          );
        })}
      </Container>
    </Box>
  );
};

export default VidaEstudiantilPage;