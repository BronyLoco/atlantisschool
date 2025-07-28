/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, IconButton, Link, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

// Importamos los iconos
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const teachersData = [
  { id: 1, name: 'Alejandro Anselmo Huanca Aldapi', title: 'Coordinador de Ciencias y Exploración', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: '"El océano es el libro de texto más antiguo; solo hay que aprender a leerlo."', social: { linkedin: 'https://www.linkedin.com/in/alejandro-huanca-7ba57127b/', email: 'mailto:a.huanca@coletioatlantis.com' } },
  { id: 2, name: 'Cristian Alexander Ruiz Gareca', title: 'Especialista en Humanidades', image: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: '"Cada historia es un viaje al corazón de lo que nos hace humanos."', social: { linkedin: '#', email: 'mailto:c.ruiz@colegioatlantis.com' } },
  { id: 3, name: 'Jhoselyn Fernandez Ojeda', title: 'Líder de Innovación (STEAM)', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: '"La creatividad es la inteligencia divirtiéndose. Aquí, jugamos con el futuro."', social: { linkedin: '#', email: 'mailto:j.fernandez@colegioatlantis.com' } },
  { id: 4, name: 'Pablo Ivar Gallardo Sánchez', title: 'Director de Bienestar Estudiantil', image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: '"La verdadera fuerza se mide en el carácter, no solo en el campo de juego."', social: { linkedin: 'https://www.linkedin.com/in/pablo-gallardo-7b866b252/', email: 'mailto:p.gallardo@colegioatlantis.com' } },
  { id: 5, name: 'Dante Emanuel Arias Tarifa', title: 'Jefe de Artes y Expresión', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: '"El arte no es lo que ves, sino lo que haces que otros vean."', social: { linkedin: 'https://www.linkedin.com/in/dante-arias-tarifa-99b151209/', email: 'mailto:d.arias@colegioatlantis.com' } },
  { id: 6, name: 'Gabriel Elmer Quiroga Pereyra', title: 'Especialista en Matemáticas', image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: '"Las matemáticas son el lenguaje con el que el universo está escrito."', social: { linkedin: '#', email: 'mailto:g.quiroga@colegioatlantis.com' } },
];

const TeachersPage = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.light' }}>
      <Container>
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          Nuestros Guías del Saber
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 12 }}>
          Un equipo de mentores apasionados, dedicados a iluminar el camino de cada estudiante.
        </Typography>

        <Grid container spacing={5} justifyContent="center" alignItems="stretch">
          {teachersData.map((teacher, index) => (
            <Grid item key={teacher.id} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    overflow: 'visible',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px', 
                    boxShadow: 3,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ mt: -6, display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                      alt={`Retrato de ${teacher.name}`}
                      src={teacher.image}
                      sx={{ width: 120, height: 120, border: '4px solid', borderColor: 'background.paper', boxShadow: 3 }}
                    />
                  </Box>
                  
                  <CardContent sx={{ 
                    display: 'grid',
                    gridTemplateRows: 'auto 1fr auto',
                    height: '100%',
                    textAlign: 'center',
                    px: 3, 
                    pb: 3,
                  }}>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mt: 2 }}>
                        {teacher.name}
                      </Typography>
                      <Typography sx={{ color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '0.5px', my: 1, fontWeight: 700 }}>
                        {teacher.title}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" sx={{ 
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      my: 2,
                      px: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {teacher.quote}
                    </Typography>

                    <Box pt={1}>
                      {/* ===== CAMBIOS DE ACCESIBILIDAD AQUÍ ===== */}
                      <IconButton 
                        component={Link} 
                        href={teacher.social.linkedin} 
                        target="_blank" 
                        color="primary"
                        aria-label={`Perfil de LinkedIn de ${teacher.name}`} // Etiqueta dinámica
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton 
                        component={Link} 
                        href={teacher.social.email} 
                        color="primary"
                        aria-label={`Enviar un correo a ${teacher.name}`} // Etiqueta dinámica
                      >
                        <EmailIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeachersPage;