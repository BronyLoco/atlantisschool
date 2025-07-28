import React from 'react';
import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Importamos los iconos
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

// ¡AHORA ESTA IMPORTACIÓN FUNCIONARÁ!
import { LINKEDIN_URL, INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_URL } from '../constants';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'common.white'
      }}
    >
      <Container maxWidth="lg">
        {/* Iconos Sociales con Accesibilidad */}
        <Box textAlign="center" mb={3}>
          <IconButton component={Link} href={LINKEDIN_URL} target="_blank" aria-label="Visita nuestro perfil de LinkedIn" sx={{ color: 'common.white', '&:hover': { color: 'secondary.main' } }}><LinkedInIcon /></IconButton>
          <IconButton component={Link} href={INSTAGRAM_URL} target="_blank" aria-label="Visita nuestro perfil de Instagram" sx={{ color: 'common.white', '&:hover': { color: 'secondary.main' } }}><InstagramIcon /></IconButton>
          <IconButton component={Link} href={FACEBOOK_URL} target="_blank" aria-label="Visita nuestra página de Facebook" sx={{ color: 'common.white', '&:hover': { color: 'secondary.main' } }}><FacebookIcon /></IconButton>
          <IconButton component={Link} href={WHATSAPP_URL} target="_blank" aria-label="Contáctanos por WhatsApp" sx={{ color: 'common.white', '&:hover': { color: 'secondary.main' } }}><WhatsAppIcon /></IconButton>
        </Box>

        {/* Información de Contacto */}
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          gap={4} 
          flexWrap="wrap"
          mb={3}
        >
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="body2">Av. Exploradores del Saber, 123</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Link href="tel:+34123456789" color="inherit" underline="hover">
              <Typography variant="body2">+34 123 456 789</Typography>
            </Link>
          </Box>
        </Box>
        
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 3 }} />

        {/* Copyright y Política de Privacidad */}
        <Box textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Colegio América de Atlantis. Todos los derechos reservados.
          </Typography>
          <Link 
            component={RouterLink} 
            to="/politica-de-privacidad"
            color="inherit" 
            underline="hover"
            sx={{ fontSize: '0.8rem', opacity: 0.8 }}
          >
            Política de Privacidad
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;