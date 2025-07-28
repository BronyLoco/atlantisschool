/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { Container, Typography, Box, Button, ImageList, ImageListItem } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOK =====

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ===== CAMBIO 2: DATOS SEPARADOS =====
// URLs de imágenes (assets/estructura de la app). El orden DEBE coincidir con el JSON.
const imageSources = [
  'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/714701/pexels-photo-714701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1329295/pexels-photo-1329295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/298240/pexels-photo-298240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

// Claves estables para los filtros. Esto desacopla la lógica del texto de la UI.
const filterKeys = ['all', 'facilities', 'studentLife', 'events'];

const GaleriaPage = () => {
  const { t } = useTranslation(); // ===== CAMBIO 3: INICIALIZAR HOOK =====
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // ===== CAMBIO 4: COMBINAR DATOS DE IMAGEN CON TRADUCCIONES =====
  // useMemo evita recalcular esto en cada render, solo cuando cambia el idioma.
  const fullGalleryData = useMemo(() => {
    const translatedData = t('galeriaPage.imageList', { returnObjects: true });
    return imageSources.map((src, index) => ({
      src,
      ...translatedData[index] // Combina {src} con {category, title} del JSON
    }));
  }, [t]);

  // ===== CAMBIO 5: LÓGICA DE FILTRADO BASADA EN CLAVES =====
  const filteredImages = filter === 'all' 
    ? fullGalleryData 
    : fullGalleryData.filter(img => img.category === filter);
  
  const lightboxSlides = filteredImages.map(item => ({ src: item.src, title: item.title }));

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          {t('galeriaPage.pageTitle')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('galeriaPage.pageSubtitle')}
        </Typography>

        {/* Filtros de Categoría */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 5 }}>
          {/* ===== CAMBIO 6: GENERAR BOTONES A PARTIR DE LAS CLAVES ===== */}
          {filterKeys.map(key => (
            <Button 
              key={key}
              variant={filter === key ? 'contained' : 'outlined'}
              onClick={() => setFilter(key)}
            >
              {t(`galeriaPage.filters.${key}`)} {/* Traduce la etiqueta dinámicamente */}
            </Button>
          ))}
        </Box>

        {/* Galería de Imágenes */}
        <ImageList variant="masonry" cols={3} gap={12}>
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <ImageListItem 
                  onClick={() => setLightboxIndex(index)}
                  sx={{ cursor: 'pointer', borderRadius: '12px', overflow: 'hidden', '&:hover img': { transform: 'scale(1.05)' } }}
                >
                  <img
                    src={`${item.src}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title} // El título ya viene traducido
                    loading="lazy"
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                </ImageListItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </ImageList>

        {/* Componente Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={lightboxSlides} // Usamos los slides ya preparados
        />
      </Container>
    </Box>
  );
};

export default GaleriaPage;