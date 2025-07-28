import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR Trans =====
import { LINKEDIN_URL, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from '../constants';

// Importamos los iconos
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FaqPage = () => {
  const { t } = useTranslation(); // ===== CAMBIO 2: INICIALIZAR HOOK =====
  const faqList = t('faqPage.faqList', { returnObjects: true });

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.light' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom sx={{ color: 'primary.main' }}>
          {t('faqPage.pageTitle')}
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('faqPage.pageSubtitle')}
        </Typography>
        
        <Box>
          {/* ===== CAMBIO 3: MAPEAR SOBRE LOS DATOS TRADUCIDOS ===== */}
          {faqList.map((faq, index) => (
            <Accordion key={faq.id} elevation={2} sx={{ mb: 1.5, borderRadius: '8px', '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />} aria-controls={`${faq.id}-content`} id={`${faq.id}-header`}>
                <Typography sx={{ fontWeight: 700, color: 'primary.main' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {/* ===== CAMBIO 4: USAR EL COMPONENTE Trans PARA MANEJAR RESPUESTAS CON ENLACES ===== */}
                  <Trans
                    i18nKey={`faqPage.faqList.${index}.answer`} // Apunta a la clave de la respuesta
                    components={{
                      admisionesLink: <Link component={RouterLink} to="/admisiones" underline="hover" />,
                      ubicacionLink: <Link component={RouterLink} to="/donde-estamos" underline="hover" />
                    }}
                  />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Caja de Contacto y Redes Sociales */}
        <Box sx={{ mt: 8, p: 4, textAlign: 'center', backgroundColor: 'primary.main', color: 'common.white', borderRadius: '10px' }}>
          <Typography variant="h4" component="h3" gutterBottom>
            {t('faqPage.contactBox.title')}
          </Typography>
          <Typography sx={{ mb: 3, opacity: 0.9 }}>
            {t('faqPage.contactBox.subtitle')}
          </Typography>
          <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
            <Link href={LINKEDIN_URL} target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LinkedInIcon /> {t('faqPage.contactBox.socials.linkedin')}
            </Link>
            <Link href={INSTAGRAM_URL} target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <InstagramIcon /> {t('faqPage.contactBox.socials.instagram')}
            </Link>
            <Link href={FACEBOOK_URL} target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FacebookIcon /> {t('faqPage.contactBox.socials.facebook')}
            </Link>
            <Link href={WHATSAPP_URL} target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WhatsAppIcon /> {t('faqPage.contactBox.socials.whatsapp')}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqPage;