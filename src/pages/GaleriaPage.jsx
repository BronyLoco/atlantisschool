/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Typography, Box, Button, ImageList, ImageListItem } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Importaciones para el Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Datos de la galería con categorías
const galleryData = [
  { src: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Instalaciones', title: 'Biblioteca Central' },
  { src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Vida Estudiantil', title: 'Clase de Laboratorio' },
  { src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Eventos', title: 'Trabajo en Equipo' },
  { src: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Instalaciones', title: 'Auditorio Principal' },
  { src: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Vida Estudiantil', title: 'Graduación' },
  { src: 'https://images.pexels.com/photos/714701/pexels-photo-714701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Instalaciones', title: 'Canchas Deportivas' },
  { src: 'https://images.pexels.com/photos/1329295/pexels-photo-1329295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Vida Estudiantil', title: 'Taller de Arte' },
  { src: 'https://images.pexels.com/photos/298240/pexels-photo-298240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Eventos', title: 'Feria de Ciencias' },
];

const categories = ['Todo', 'Instalaciones', 'Vida Estudiantil', 'Eventos'];

const GaleriaPage = () => {
  const [filter, setFilter] = useState('Todo');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredImages = filter === 'Todo' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          Galería: La Vida en Atlantis
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Una ventana a nuestra comunidad, nuestras instalaciones y los momentos que nos definen.
        </Typography>

        {/* Filtros de Categoría */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 5 }}>
          {categories.map(category => (
            <Button 
              key={category}
              variant={filter === category ? 'contained' : 'outlined'}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* Galería de Imágenes (Layout de Mosaico) */}
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
                  onClick={() => setLightboxIndex(index)} // Abre el lightbox al hacer clic
                  sx={{ cursor: 'pointer', borderRadius: '12px', overflow: 'hidden', '&:hover img': { transform: 'scale(1.05)' } }}
                >
                  <img
                    src={`${item.src}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                </ImageListItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </ImageList>

        {/* 2. El Componente Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={filteredImages.map(item => ({ src: item.src }))}
        />
      </Container>
    </Box>
  );
};

export default GaleriaPage;