import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// ... (tus datos de newsData y categories no cambian) ...
const newsData = [
  { id: 1, category: 'Ciencia y Descubrimiento', title: 'Estudiantes de Atlantis Descubren Cómo Generar Fuego Bajo el Agua', excerpt: 'Desafiando las leyes de la física, un equipo de nuestros alumnos de química avanzada ha logrado una combustión sostenida en un medio acuático.', image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'Octubre 28, 2024' },
  { id: 2, category: 'Logros', title: 'El Equipo de Debate "Los Argonautas" Gana el Torneo Nacional', excerpt: 'Nuestro brillante equipo de debate se ha coronado campeón nacional tras una final electrizante. Su elocuencia y argumentación demostraron la excelencia de Atlantis.', image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'Octubre 22, 2024' },
  { id: 3, category: 'Actividades', title: 'Nuestra Feria Anual de Culturas del Mundo Rompe Récords', excerpt: 'Con más de 30 países representados, la Feria de Culturas 2024 fue un éxito rotundo, celebrando la diversidad de nuestra comunidad con comida, música y tradiciones.', image: 'https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'Octubre 15, 2024' },
  { id: 4, category: 'Ciencia y Descubrimiento', title: 'Proyecto de Robótica Marina Mapea el Fondo de un Lago Local', excerpt: 'El club de robótica presenta su dron submarino autónomo, "Nereus I", capaz de crear mapas 3D de ecosistemas acuáticos.', image: 'https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'Octubre 10, 2024' },
  { id: 5, category: 'Actividades', title: 'Concierto de Temporada: Una Noche de Talentos Musicales', excerpt: 'La orquesta y el coro del colegio ofrecieron un concierto inolvidable, demostrando el increíble talento artístico de nuestros estudiantes.', image: 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'Octubre 5, 2024' },
  { id: 6, category: 'Logros', title: 'Alumna de Atlantis Gana Olimpiada Nacional de Matemáticas', excerpt: 'Felicitamos a Sofía Vargas por obtener la medalla de oro en la competencia nacional, un testimonio de su brillantez y dedicación.', image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', date: 'Septiembre 29, 2024' },
  { id: 7, category: 'Actividades', title: 'Jornada de Reforestación en el Parque Natural', excerpt: 'Nuestros estudiantes participaron en una jornada de voluntariado, plantando más de 200 árboles y reafirmando nuestro compromiso con el medio ambiente.', image: 'https://www.nyce.org.mx/wp-content/uploads/2024/08/REFORESTACION1.jpg', date: 'Septiembre 20, 2024' },
];

const categories = ['Todos', 'Ciencia y Descubrimiento', 'Actividades', 'Logros'];


const NoticiasPage = () => {
  const [filter, setFilter] = useState('Todos');
  const featuredPost = newsData[0];
  const filteredNews = filter === 'Todos' 
    ? newsData.slice(1) 
    : newsData.slice(1).filter(post => post.category === filter);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.light' }}> {/* Usando el tema */}
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          Diario de Descubrimientos
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Mantente al día con las últimas noticias, logros y actividades de nuestra vibrante comunidad.
        </Typography>

        {/* ARTÍCULO DESTACADO */}
        <Card sx={{ display: { xs: 'none', md: 'flex' }, mb: 8, borderRadius: '16px', boxShadow: 3 }}>
          <CardMedia component="img" sx={{ width: '50%' }} image={featuredPost.image} alt={featuredPost.title} />
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <CardContent sx={{ flex: '1 0 auto', p: 4 }}>
              <Chip label={featuredPost.category} size="small" 
                sx={{ mb: 2, backgroundColor: 'secondary.main', color: 'primary.main', fontWeight: 700 }} 
              />
              <Typography component="h2" variant="h4" sx={{ mb: 2 }}>{featuredPost.title}</Typography>
              <Typography variant="body1" color="text.secondary" paragraph>{featuredPost.excerpt}</Typography>
              <Typography variant="caption" color="text.secondary">{featuredPost.date}</Typography>
            </CardContent>
            <CardActions sx={{ pl: 4, pb: 4 }}>
              <Button size="large" color="primary" sx={{ fontWeight: 700 }}>Leer más</Button> {/* Usando prop de color */}
            </CardActions>
          </Box>
        </Card>

        {/* FILTROS DE CATEGORÍA */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 5 }}>
          {categories.map(category => (
            <Button 
              key={category}
              variant={filter === category ? 'contained' : 'outlined'}
              color="primary" // Aplicamos el color primario a los botones
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* Grid de Noticias */}
        <Grid container spacing={4} component={motion.div} layout>
          <AnimatePresence>
            {filteredNews.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4} component={motion.div}
                layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '16px', boxShadow: 2 }}>
                  <CardMedia component="img" height="200" image={post.image} alt={post.title} />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Chip label={post.category} size="small" 
                      sx={{ mb: 1.5, backgroundColor: (theme) => theme.palette.custom.chip.background, fontWeight: 600 }} // Usando el tema para el color RGBA
                    />
                    <Typography gutterBottom variant="h6" component="h2" sx={{ color: 'primary.main' }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{post.excerpt}</Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button size="small" color="primary" sx={{ fontWeight: 700 }}>Leer más</Button>
                    <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};

export default NoticiasPage;