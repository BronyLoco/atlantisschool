import React from 'react';
import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOK =====

// Importamos los iconos
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import { LINKEDIN_URL, INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_URL } from '../constants';

const Footer = () => {
  const { t } = useTranslation(); // ===== CAMBIO 2: INICIALIZAR HOOK =====

  return (
    <Box 
      component="footer" 
      sx={{ py: 4, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'common.white' }}
    >
      <Container maxWidth="lg">
        {/* ===== CAMBIO 3: APLICAR TRADUCCIONES A ARIA-LABELS ===== */}
        <Box textAlign="center" mb={3}>
          <IconButton component={Link} href={LINKEDIN_URL} target="_blank" aria-label={t('footer.socialsAriaLabel.linkedin')} sx={{ color: 'common.white', '&:hover': { color: 'secondary.main' } }}><LinkedInIcon /></IconButton>
          <IconButton component={Link} href={INSTAGRAM_URL} target="_blank" aria-label={t('footer.socialsAriaLabel.instagram')} sx={{ color: 'common.white', '&:hover': { color: 'secondary.main' } }}><InstagramIcon /></IconButton>
          <IconButton component={Link} href={FACEBOOK_URL} target="_blank" aria-label={t('footer.socialsAriaLabel.facebook')} sx={{ color: 'common.white', '&:hover': { color: 'secondary.main' } }}><FacebookIcon /></IconButton>
          <IconButton component={Link} href={WHATSAPP_URL} target="_blank" aria-label={t('footer.socialsAriaLabel.whatsapp')} sx={{ color: 'common.white', '&:hover': { color: 'secondary.main' } }}><WhatsAppIcon /></IconButton>
        </Box>

        {/* ===== CAMBIO 4: APLICAR TRADUCCIONES A INFO DE CONTACTO ===== */}
        <Box display="flex" justifyContent="center" alignItems="center" gap={4} flexWrap="wrap" mb={3}>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="body2">{t('footer.contactInfo.address')}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Link href={`tel:${t('footer.contactInfo.phone')}`} color="inherit" underline="hover">
              <Typography variant="body2">{t('footer.contactInfo.phone')}</Typography>
            </Link>
          </Box>
        </Box>
        
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 3 }} />

        {/* ===== CAMBIO 5: APLICAR TRADUCCIONES A COPYRIGHT Y ENLACES FINALES ===== */}
        <Box textAlign="center">
          <Typography variant="body2">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </Typography>
          <Link component={RouterLink} to="/politica-de-privacidad" color="inherit" underline="hover" sx={{ fontSize: '0.8rem', opacity: 0.8 }}>
            {t('footer.privacyPolicy')}
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;