/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { Container, Typography, Grid, Box, IconButton, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOK =====

// ===== CAMBIO 2: DATOS ESTRUCTURALES Y DE ASSETS (NO TRADUCIBLES) =====
// El texto (name, title, quote) se ha movido a los archivos JSON.
const teacherProfileData = [
  { id: 1, image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', social: { linkedin: 'https://www.linkedin.com/in/alejandro-huanca-7ba57127b/', email: 'mailto:a.huanca@coletioatlantis.com' } },
  { id: 2, image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', social: { linkedin: 'https://www.linkedin.com/in/alexander-ruiz-gareca-aa79a72a6/', email: 'mailto:c.ruiz@colegioatlantis.com' } },
  { id: 3, image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', social: { linkedin: '#', email: 'mailto:j.fernandez@colegioatlantis.com' } },
  { id: 4, image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', social: { linkedin: 'https://www.linkedin.com/in/pablo-gallardo-7b866b252/', email: 'mailto:p.gallardo@colegioatlantis.com' } },
  { id: 5, image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', social: { linkedin: 'https://www.linkedin.com/in/dante-arias-tarifa-99b151209/', email: 'mailto:d.arias@colegioatlantis.com' } },
  { id: 6, image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', social: { linkedin: '#', email: 'mailto:g.quiroga@colegioatlantis.com' } },
];

const TeachersPage = () => {
  const { t } = useTranslation(); // ===== CAMBIO 3: INICIALIZAR HOOK =====

  // ===== CAMBIO 4: FUSIONAR DATOS ESTRUCTURALES CON DATOS TRADUCIDOS =====
  // useMemo optimiza el rendimiento, recalculando solo cuando cambia el idioma.
  const teachers = useMemo(() => {
    const translatedInfo = t('teachersPage.teacherList', { returnObjects: true });
    return teacherProfileData.map((profile, index) => ({
      ...profile, // id, image, social
      ...translatedInfo[index] // name, title, quote
    }));
  }, [t]);

  return (
    <Box sx={{ py: 10, backgroundColor: 'background.light', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
          {t('teachersPage.pageTitle')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 12 }}>
          {t('teachersPage.pageSubtitle')}
        </Typography>

        {/* ===== CAMBIO 5: MAPEAR SOBRE LOS DATOS FUSIONADOS ===== */}
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" direction={index % 2 === 0 ? 'row' : 'row-reverse'} sx={{ mb: { xs: 8, md: 12 } }}>
              <Grid item xs={12} sm={5}>
                <Box sx={{ height: { xs: 350, sm: 450 }, width: '100%', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
                  <Box
                    component="img"
                    src={teacher.image}
                    // ===== CAMBIO 6: TEXTO ALT TRADUCIDO CON INTERPOLACIÓN =====
                    alt={t('teachersPage.altText', { name: teacher.name })}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', '&:hover': { transform: 'scale(1.05)' } }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {teacher.name}
                  </Typography>
                  <Typography variant="h6" component="p" sx={{ color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '1px', my: 1, fontWeight: 600 }}>
                    {teacher.title}
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3, fontStyle: 'italic', color: 'text.secondary', fontSize: '1.1rem', borderLeft: { xs: 'none', sm: 4 }, borderColor: 'primary.light', pl: { xs: 0, sm: 2 }, textAlign: 'left' }}>
                    {teacher.quote}
                  </Typography>
                  <Box>
                    <IconButton component={Link} href={teacher.social.linkedin} target="_blank" color="primary"
                      // ===== CAMBIO 7: ARIA-LABEL TRADUCIDO CON INTERPOLACIÓN =====
                      aria-label={t('teachersPage.ariaLinkedIn', { name: teacher.name })}
                      sx={{ '&:hover': { transform: 'scale(1.2)' }, transition: 'transform 0.2s' }}
                    >
                      <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <IconButton component={Link} href={teacher.social.email} color="primary"
                      // ===== CAMBIO 8: ARIA-LABEL TRADUCIDO CON INTERPOLACIÓN =====
                      aria-label={t('teachersPage.ariaEmail', { name: teacher.name })}
                      sx={{ '&:hover': { transform: 'scale(1.2)' }, transition: 'transform 0.2s' }}
                    >
                      <EmailIcon fontSize="large" />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default TeachersPage;