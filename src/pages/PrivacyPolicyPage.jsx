import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOKS Y Trans =====

const PrivacyPolicyPage = () => {
  // ===== CAMBIO 2: INICIALIZAR HOOKS Y PREPARAR DATOS =====
  const { t, i18n } = useTranslation();
  const sections = t('privacyPolicyPage.sections', { returnObjects: true });
  // Formatear la fecha según el idioma actual (ej: 'es' o 'en')
  const lastUpdatedDate = new Date().toLocaleDateString(i18n.language);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.light' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
          {t('privacyPolicyPage.pageTitle')}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
          {/* Usamos interpolación para la fecha dinámica */}
          {t('privacyPolicyPage.lastUpdated', { date: lastUpdatedDate })}
        </Typography>
        
        <Typography variant="body1" paragraph>
          {t('privacyPolicyPage.intro')}
        </Typography>

        {/* ===== CAMBIO 3: GENERAR SECCIONES DINÁMICAMENTE ===== */}
        {sections.map((section) => (
          <Box key={section.title}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
              {section.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {section.paragraph}
            </Typography>
          </Box>
        ))}

        {/* ===== CAMBIO 4: MANEJAR LA SECCIÓN FINAL CON Trans ===== */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, color: 'primary.main' }}>
          {t('privacyPolicyPage.contactSection.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          <Trans
            i18nKey="privacyPolicyPage.contactSection.paragraph"
            components={{
              contactLink: <Link component={RouterLink} to="/donde-estamos" />
            }}
          />
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;