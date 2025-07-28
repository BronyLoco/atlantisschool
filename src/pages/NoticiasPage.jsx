import React, { useState, useMemo } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOK =====

// ===== CAMBIO 2: DATOS ESTRUCTURALES Y DE ASSETS =====
const newsAssets = [
  { id: 1, image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, image: 'https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, image: 'https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, image: 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 6, image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 7, image: 'https://www.nyce.org.mx/wp-content/uploads/2024/08/REFORESTACION1.jpg' },
];
// Claves estables para los filtros, desacoplando la lógica de la UI
const filterKeys = ['all', 'science', 'activities', 'achievements'];

const NoticiasPage = () => {
  const { t } = useTranslation(); // ===== CAMBIO 3: INICIALIZAR HOOK =====
  const [filter, setFilter] = useState('all');

  // ===== CAMBIO 4: FUSIONAR ASSETS CON DATOS TRADUCIDOS =====
  const fullNewsData = useMemo(() => {
    const translatedNews = t('noticiasPage.newsList', { returnObjects: true });
    return newsAssets.map((asset, index) => ({
      ...asset, // id, image
      ...translatedNews[index], // categoryKey, title, excerpt, date
    }));
  }, [t]);

  const featuredPost = fullNewsData[0];
  const filteredNews = filter === 'all' 
    ? fullNewsData.slice(1) 
    : fullNewsData.slice(1).filter(post => post.categoryKey === filter);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.light' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          {t('noticiasPage.pageTitle')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('noticiasPage.pageSubtitle')}
        </Typography>

        {/* ARTÍCULO DESTACADO */}
        <Card sx={{ display: { xs: 'none', md: 'flex' }, mb: 8, borderRadius: '16px', boxShadow: 3 }}>
          <CardMedia component="img" sx={{ width: '50%' }} image={featuredPost.image} alt={t('noticiasPage.altText', { title: featuredPost.title })} />
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <CardContent sx={{ flex: '1 0 auto', p: 4 }}>
              <Chip label={t(`noticiasPage.filters.${featuredPost.categoryKey}`)} size="small" sx={{ mb: 2, backgroundColor: 'secondary.main', color: 'primary.main', fontWeight: 700 }} />
              <Typography component="h2" variant="h4" sx={{ mb: 2 }}>{featuredPost.title}</Typography>
              <Typography variant="body1" color="text.secondary" paragraph>{featuredPost.excerpt}</Typography>
              <Typography variant="caption" color="text.secondary">{featuredPost.date}</Typography>
            </CardContent>
            <CardActions sx={{ pl: 4, pb: 4 }}>
              <Button size="large" color="primary" sx={{ fontWeight: 700 }}>{t('noticiasPage.readMoreButton')}</Button>
            </CardActions>
          </Box>
        </Card>

        {/* FILTROS DE CATEGORÍA */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 5 }}>
          {filterKeys.map(key => (
            <Button key={key} variant={filter === key ? 'contained' : 'outlined'} color="primary" onClick={() => setFilter(key)}>
              {t(`noticiasPage.filters.${key}`)}
            </Button>
          ))}
        </Box>

        {/* Grid de Noticias */}
        <Grid container spacing={4} component={motion.div} layout>
          <AnimatePresence>
            {filteredNews.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4} component={motion.div} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4 }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '16px', boxShadow: 2 }}>
                  <CardMedia component="img" height="200" image={post.image} alt={t('noticiasPage.altText', { title: post.title })} />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Chip label={t(`noticiasPage.filters.${post.categoryKey}`)} size="small" sx={{ mb: 1.5, backgroundColor: (theme) => theme.palette.custom.chip.background, fontWeight: 600 }} />
                    <Typography gutterBottom variant="h6" component="h2" sx={{ color: 'primary.main' }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{post.excerpt}</Typography>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button size="small" color="primary" sx={{ fontWeight: 700 }}>{t('noticiasPage.readMoreButton')}</Button>
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