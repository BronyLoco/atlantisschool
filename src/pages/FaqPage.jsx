import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Importamos los iconos para la caja de contacto
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// Datos para las preguntas frecuentes
const faqData = [
  {
    id: 'faq1',
    question: '¿Cuál es el proceso de admisión?',
    answer: 'Nuestro proceso consta de cuatro pasos: 1) Envío de la solicitud en línea, 2) Entrevista familiar para conocernos, 3) Evaluación de potencial del estudiante, y 4) Comunicación de resultados. Puedes encontrar más detalles en nuestra página de Admisiones.'
  },
  {
    id: 'faq2',
    question: '¿Qué enfoque educativo tiene el colegio?',
    answer: 'En el Colegio América de Atlantis, fusionamos una sólida excelencia académica con un enfoque en el descubrimiento y la innovación (STEAM). Fomentamos el pensamiento crítico, la creatividad y el desarrollo de habilidades de liderazgo en un entorno global y colaborativo.'
  },
  {
    id: 'faq3',
    question: '¿Ofrecen actividades extracurriculares?',
    answer: '¡Sí! Ofrecemos una amplia gama de actividades que incluyen robótica, debate, club de ciencias marinas, deportes de equipo y talleres de arte. Creemos que el aprendizaje se extiende más allá del aula para un desarrollo integral.'
  }
];

const FaqPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        {/* Encabezado de la página */}
        <Typography 
          variant="h3" 
          component="h1" 
          textAlign="center"
          gutterBottom
          sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#003366' }}
        >
          Navegando tus Dudas
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6, fontFamily: 'Montserrat, sans-serif' }}>
          Aquí respondemos algunas de las preguntas más comunes sobre nuestro colegio.
        </Typography>

        {/* Acordeón de Preguntas */}
        <Box>
          {faqData.map((faq) => (
            <Accordion key={faq.id} sx={{ mb: 1, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#003366' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'text.secondary' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Caja de Contacto y Redes Sociales */}
        <Box 
          sx={{ 
            mt: 8, 
            p: 4, 
            textAlign: 'center', 
            backgroundColor: '#003366', 
            color: '#ffffff', 
            borderRadius: '10px'
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom sx={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Aún tienes preguntas?
          </Typography>
          <Typography sx={{ mb: 3, opacity: 0.9 }}>
            Nuestro equipo está listo para ayudarte. Conéctate con nosotros a través de nuestros canales oficiales.
          </Typography>
          <Box display="flex" justifyContent="center" gap={4}>
            <Link href="https://wa.me/TU_NUMERO_DE_TELEFONO" target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WhatsAppIcon /> WhatsApp
            </Link>
            <Link href="https://facebook.com/TU_PAGINA" target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FacebookIcon /> Facebook
            </Link>
            <Link href="https://instagram.com/TU_PERFIL" target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <InstagramIcon /> Instagram
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqPage;