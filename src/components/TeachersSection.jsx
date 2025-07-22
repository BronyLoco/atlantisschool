import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, IconButton, Link } from '@mui/material';

// Importamos los iconos que usaremos
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// 1. Actualizamos los datos para incluir una biografía y enlaces sociales
const teachersData = [
  { id: 1, name: 'Alejandro Anselmo Huanca Aldapi', title: 'Coordinador de Ciencias y Exploración', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'Apasionado por la biología marina, guía a los estudiantes a descubrir los secretos del océano.', social: { linkedin: '#', email: 'mailto:a.huanca@colegioatlantis.com' } },
  { id: 2, name: 'Cristian Alexander Ruiz Gareca', title: 'Especialista en Humanidades', image: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'Utiliza la historia y la literatura como un mapa para navegar la complejidad humana y fomentar el debate.', social: { linkedin: '#', email: 'mailto:c.ruiz@colegioatlantis.com' } },
  { id: 3, name: 'Jhoselyn Fernandez Ojeda', title: 'Líder de Innovación (STEAM)', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'Convierte las aulas en laboratorios de creatividad, equipando a los alumnos con las herramientas del futuro.', social: { linkedin: '#', email: 'mailto:j.fernandez@colegioatlantis.com' } },
  { id: 4, name: 'Pablo Ivar Gallardo Sánchez', title: 'Director de Bienestar Estudiantil', image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'Fomenta el desarrollo integral a través de la disciplina, el deporte y el trabajo en equipo.', social: { linkedin: '#', email: 'mailto:p.gallardo@colegioatlantis.com' } },
  { id: 5, name: 'Dante Emanuel Arias Tarifa', title: 'Jefe de Artes y Expresión', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'Guía a los estudiantes a encontrar su propia voz a través de la música, el teatro y las artes plásticas.', social: { linkedin: '#', email: 'mailto:d.arias@colegioatlantis.com' } },
  { id: 6, name: 'Gabriel Elmer Quiroga Pereyra', title: 'Especialista en Matemáticas y Lógica', image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'Enseña a los alumnos a descubrir patrones y a resolver enigmas con la precisión y la belleza de los números.', social: { linkedin: '#', email: 'mailto:g.quiroga@colegioatlantis.com' } },
];

const TeachersSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#003366' }}>
        Nuestros Guías del Saber
      </Typography>
      <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6, fontFamily: 'Montserrat, sans-serif' }}>
        Un equipo de mentores apasionados y dedicados a iluminar el camino de cada estudiante.
      </Typography>

      <Grid container spacing={4}>
        {teachersData.map((teacher) => (
          <Grid item key={teacher.id} xs={12} sm={6} md={4}>
            {/* 2. La tarjeta ahora tiene un hover effect más complejo */}
            <Card sx={{ 
              height: '100%',
              borderRadius: '10px', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 15px 30px rgba(0, 51, 102, 0.15)'
              }
            }}>
              {/* Contenedor para la imagen y el overlay */}
              <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={teacher.image}
                  alt={`Retrato de ${teacher.name}`}
                  sx={{ transition: 'transform 0.4s ease', '&:hover': { transform: 'scale(1.1)' } }}
                />
                {/* 3. El overlay que aparece al pasar el cursor */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 51, 102, 0.6)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    '&:hover': {
                      opacity: 1
                    }
                  }}
                >
                  <Typography variant="body1" sx={{ p: 2 }}>{teacher.bio}</Typography>
                  <Box>
                    <IconButton component={Link} href={teacher.social.linkedin} target="_blank" sx={{ color: 'white' }}>
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton component={Link} href={teacher.social.email} sx={{ color: 'white' }}>
                      <EmailIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ fontFamily: 'Playfair Display, serif', color: '#003366', fontWeight: 700 }}>
                  {teacher.name}
                </Typography>
                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#f0b429', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  {teacher.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeachersSection;