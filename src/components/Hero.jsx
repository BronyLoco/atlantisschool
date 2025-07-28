import React from 'react';
import { useTranslation } from 'react-i18next'; 
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { HERO_VIDEO_URL, LOGO_URL_WHITE_TRANSPARENT } from '../constants';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{
        height: '90vh', position: 'relative', display: 'flex', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', color: 'common.white', overflow: 'hidden'
    }}>
      <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', left: '50%', top: '50%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: -1 }}>
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 51, 102, 0.5)' }} />
      
      <Container sx={{ position: 'relative' }}>
        <Box mb={4}>
          <img 
            src={LOGO_URL_WHITE_TRANSPARENT} 
            alt="Logo del Colegio América de Atlantis" 
            style={{ width: '150px', height: 'auto' }} 
          />
        </Box>
        
        {/* ===== CAMBIO 1: TEXTO AHORA ES DINÁMICO ===== */}
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ color: 'secondary.main' }}
        >
          {t('hero.slogan')}
        </Typography>

        {/* ===== CAMBIO 2: TEXTO AHORA ES DINÁMICO ===== */}
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          {t('hero.subtitle')}
        </Typography>
        
        <Button 
          component={RouterLink}
          to="/admisiones"
          variant="contained" 
          size="large"
          color="secondary"
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.light',
            }
          }}
        >
          {/* ===== CAMBIO 3: TEXTO AHORA ES DINÁMICO ===== */}
          {t('hero.ctaButton')}
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;