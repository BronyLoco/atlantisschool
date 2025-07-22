import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';

// Datos de las noticias. Tenerlos en un array hace que el código sea más limpio y escalable.
const newsData = [
  {
    id: 1,
    category: 'Ciencia y Descubrimiento',
    title: 'Estudiantes de Atlantis Descubren Cómo Generar Fuego Bajo el Agua',
    excerpt: 'Desafiando las leyes de la física, un equipo de nuestros alumnos de química avanzada ha logrado una combustión sostenida en un medio acuático.',
    image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    category: 'Actividades',
    title: 'Nuestra Feria Anual de Culturas del Mundo Rompe Récords',
    excerpt: 'Con más de 30 países representados, la Feria de Culturas 2024 fue un éxito rotundo, celebrando la diversidad de nuestra comunidad con comida, música y tradiciones.',
    image: 'https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    category: 'Logros',
    title: 'El Equipo de Debate "Los Argonautas" Gana el Torneo Nacional',
    excerpt: 'Nuestro brillante equipo de debate se ha coronado campeón nacional tras una final electrizante. Su elocuencia y capacidad de argumentación demostraron la excelencia de Atlantis.',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const NoticiasPage = () => {
  return (
    <Container sx={{ py: 8 }}>
      {/* Encabezado de la página */}
      <Typography 
        variant="h3" 
        component="h1" 
        textAlign="center"
        gutterBottom
        sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#003366' }}
      >
        Diario de Descubrimientos
      </Typography>
      <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6, fontFamily: 'Montserrat, sans-serif' }}>
        Mantente al día con las últimas noticias, logros y actividades de nuestra vibrante comunidad.
      </Typography>

      {/* Grid para las tarjetas de noticias */}
      <Grid container spacing={4}>
        {newsData.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              borderRadius: '10px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 12px 35px rgba(0, 51, 102, 0.15)'
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={`Imagen de ${post.title}`}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip 
                  label={post.category} 
                  size="small"
                  sx={{ 
                    mb: 2, 
                    backgroundColor: '#f0b429', 
                    color: '#003366', 
                    fontWeight: 700,
                    fontFamily: 'Montserrat, sans-serif'
                  }} 
                />
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontFamily: 'Playfair Display, serif', color: '#003366' }}>
                  {post.title}
                </Typography>
                <Typography color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {post.excerpt}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small"
                  sx={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontWeight: 700,
                    color: '#003366'
                  }}
                >
                  Leer más
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NoticiasPage;