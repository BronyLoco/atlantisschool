/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Paper, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOK =====

// Importamos los iconos
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DondeEstamosPage = () => {
  const { t } = useTranslation(); // ===== CAMBIO 2: INICIALIZAR HOOK =====

  return (
    <Box sx={{ height: 'calc(100vh - 68.5px)', position: 'relative', overflow: 'hidden', backgroundColor: 'primary.dark' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34839824.28827725!2d-122.109375!3d-48.876667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a9f635c49610e59%3A0x2f523a54e963428d!2sPolo%20oce%C3%A1nico%20de%20inaccesibilidad!5e0!3m2!1ses!2ses!4v1668518981445!5m2!1ses!2ses" 
        width="100%" height="100%" 
        style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) opacity(0.8)' }}
        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title={t('dondeEstamosPage.iframeTitle')} // ===== CAMBIO 3: AÑADIR TÍTULO ACCESIBLE =====
      ></iframe>

      {/* SONAR PING (Sin cambios de texto) */}
      <Box sx={{ position: 'absolute', top: '58%', left: '35%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <LocationOnIcon sx={{ color: 'secondary.main', fontSize: 40 }} />
        </motion.div>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%' }}>
          <motion.div initial={{ scale: 0, opacity: 0.7 }} animate={{ scale: 3, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: 'easeOut' }} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #f0b429', transform: 'translate(-50%, -50%)' }}/>
        </Box>
      </Box>

      {/* ===== CAMBIO 4: TARJETA FLOTANTE INTERNACIONALIZADA ===== */}
      <motion.div initial={{ y: -10 }} animate={{ y: 10 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} style={{ position: 'absolute', top: '20%', left: '5%', zIndex: 2 }}>
        <Paper
          elevation={12}
          sx={(theme) => ({ p: 4, maxWidth: '400px', backgroundColor: theme.palette.custom.mapPage.cardBackground, backdropFilter: 'blur(10px)', borderRadius: '15px', border: `1px solid ${theme.palette.custom.mapPage.cardBorder}`, color: 'common.white' })}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {t('dondeEstamosPage.floatingCard.title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
            {t('dondeEstamosPage.floatingCard.subtitle')}
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <EmailIcon sx={{ mr: 1.5, color: 'secondary.main' }} />
            <Link href={`mailto:${t('dondeEstamosPage.floatingCard.email')}`} color="inherit" underline="hover">
              {t('dondeEstamosPage.floatingCard.email')}
            </Link>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ mr: 1.5, color: 'secondary.main' }} />
            <Link href={`tel:${t('dondeEstamosPage.floatingCard.phone')}`} color="inherit" underline="hover">
              {t('dondeEstamosPage.floatingCard.phone')}
            </Link>
          </Box>
          <Box display="flex" alignItems="center">
            <AccessTimeIcon sx={{ mr: 1.5, color: 'secondary.main' }} />
            <Typography variant="body2">{t('dondeEstamosPage.floatingCard.hours')}</Typography>
          </Box>
        </Paper>
      </motion.div>

      {/* OLAS ANIMADAS (Sin cambios de texto) */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 3 }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <motion.path fill={(theme) => theme.palette.custom.mapPage.waveFill} d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,240C672,267,768,277,864,256C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" animate={{ d: [ "M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,240C672,267,768,277,864,256C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z", "M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,170.7C672,160,768,192,864,218.7C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z", "M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,240C672,267,768,277,864,256C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"] }} transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
        </svg>
      </Box>
    </Box>
  );
};

export default DondeEstamosPage;