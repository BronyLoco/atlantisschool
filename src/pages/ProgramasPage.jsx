/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Importamos iconos para las áreas de enfoque
import ScienceIcon from '@mui/icons-material/Science'; // STEAM
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Humanidades
import PaletteIcon from '@mui/icons-material/Palette'; // Artes
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Deportes

// Contenido para cada nivel educativo
const academicData = {
  primaria: {
    title: 'Educación Primaria: Cimientos del Descubrimiento',
    description: 'En esta etapa fundamental, nos centramos en despertar la curiosidad y construir una base sólida de conocimientos y habilidades. Nuestro enfoque lúdico y práctico asegura que los niños amen aprender mientras exploran el mundo que les rodea.',
    areas: [
      { icon: <ScienceIcon />, title: 'Fundamentos STEAM', text: 'Introducción a la ciencia, la robótica y el pensamiento lógico a través de proyectos divertidos y experimentos prácticos.' },
      { icon: <MenuBookIcon />, title: 'Lenguaje y Comunicación', text: 'Desarrollo de la lectoescritura, el amor por la literatura y la habilidad para expresar ideas con claridad y confianza.' },
      { icon: <PaletteIcon />, title: 'Expresión Artística', text: 'Exploración de la música, el arte y el teatro para fomentar la creatividad, la sensibilidad y la autoexpresión.' },
      { icon: <SportsSoccerIcon />, title: 'Desarrollo Físico y Social', text: 'A través del deporte y el juego en equipo, enseñamos valores como la colaboración, la disciplina y el respeto mutuo.' },
    ]
  },
  secundaria: {
    title: 'Educación Secundaria: Navegando hacia el Futuro',
    description: 'Preparamos a los adolescentes para los desafíos del mañana, profundizando en el conocimiento académico y desarrollando habilidades críticas de liderazgo, resolución de problemas y pensamiento independiente.',
    areas: [
      { icon: <ScienceIcon />, title: 'STEAM Avanzado', text: 'Programas de robótica, programación, biología marina y física aplicada que preparan para carreras de alto impacto.' },
      { icon: <MenuBookIcon />, title: 'Humanidades y Debate', text: 'Análisis crítico de la historia, la literatura y la filosofía, complementado con un club de debate para afinar la argumentación.' },
      { icon: <PaletteIcon />, title: 'Artes y Medios Digitales', text: 'Cursos de diseño gráfico, producción audiovisual y música digital que conectan la creatividad con la tecnología.' },
      { icon: <SportsSoccerIcon />, title: 'Liderazgo y Emprendimiento', text: 'Programas que fomentan la iniciativa, la gestión de proyectos y el desarrollo de habilidades de liderazgo.' },
    ]
  }
};

const ProgramasPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const currentData = activeTab === 0 ? academicData.primaria : academicData.secundaria;

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.light' }}>
      <Container maxWidth="lg">
        {/* Encabezado de la página */}
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          Programas Académicos
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Un viaje educativo diseñado para cada etapa del crecimiento.
        </Typography>

        {/* Pestañas de Navegación (Tabs) */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Educación Primaria" />
            <Tab label="Educación Secundaria" />
          </Tabs>
        </Box>

        {/* Contenido de la Pestaña Activa */}
        <motion.div
          key={activeTab} // La key es crucial para que Framer Motion detecte el cambio y anime
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 }, borderRadius: '16px', backgroundColor: 'transparent' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
              {currentData.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              {currentData.description}
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {currentData.areas.map((area, index) => (
                <Grid item key={index} xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{ mr: 2, color: 'secondary.main' }}>{area.icon}</Box>
                    <Box>
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