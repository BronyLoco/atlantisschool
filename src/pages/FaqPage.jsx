import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import { LINKEDIN_URL, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from '../constants';

// Importamos los iconos
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Los datos de faqData no cambian
const faqData = [
  { id: 'faq1', question: '¿Cuál es la filosofía del Colegio América de Atlantis?', answer: 'Nuestra filosofía se basa en la idea de un \'Océano de Saber\', donde inspiramos a nuestros alumnos a alcanzar su grandeza a través del aprendizaje, el descubrimiento y la exploración profunda.' },
  { id: 'faq2', question: '¿Cómo puedo inscribir a mi hijo en el colegio?', answer: (<>Para iniciar el proceso de inscripción, por favor visita nuestra página de \'Admisiones\' donde encontrarás toda la información y los formularios necesarios. Puedes acceder directamente haciendo clic aquí: <Link component={RouterLink} to="/admisiones" underline="hover">Página de Admisiones</Link>.</>) },
  { id: 'faq3', question: '¿Qué valores se enseñan en el colegio?', answer: 'Enseñamos valores fundamentales como la integridad, el respeto, la excelencia y el compromiso comunitario, esenciales para formar ciudadanos del mundo, responsables y empáticos.' },
  { id: 'faq4', question: '¿Qué programas STEAM se ofrecen?', answer: 'Implementamos programas que integran Ciencia, Tecnología, Ingeniería, Artes y Matemáticas. Nuestro enfoque busca fomentar el dominio tecnológico, la resolución creativa de problemas y la innovación.' },
  { id: 'faq5', question: '¿Dónde se encuentra el Colegio América de Atlantis?', answer: (<>Puedes encontrar nuestra ubicación conceptual y toda la información de contacto en la sección \'Donde Estamos\' de nuestro sitio web. Accede directamente aquí: <Link component={RouterLink} to="/donde-estamos" underline="hover">Ver Ubicación y Contacto</Link>.</>) },
  { id: 'faq6', question: '¿Qué actividades extracurriculares se ofrecen?', answer: 'Ofrecemos una amplia gama de actividades que incluyen robótica, debate, club de ciencias marinas, deportes de equipo y talleres de arte. Creemos que el aprendizaje se extiende más allá del aula para un desarrollo integral.' },
  { id: 'faq7', question: '¿Cómo se promueve el desarrollo emocional en los estudiantes?', answer: 'Fomentamos la inteligencia emocional a través de un programa de bienestar estudiantil, mentorías y actividades colaborativas que desarrollan habilidades clave como el liderazgo, la resiliencia y el trabajo en equipo.' },
];

const FaqPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.light' }}> {/* Usando el tema */}
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h1" 
          textAlign="center"
          gutterBottom
          sx={{ color: 'primary.main' }} // Usando el tema
        >
          Navegando tus Dudas
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Aquí respondemos algunas de las preguntas más comunes sobre nuestro colegio.
        </Typography>
        
        <Box>
          {faqData.map((faq) => (
            // Usamos la prop 'elevation' en lugar de 'boxShadow' para consistencia
            <Accordion key={faq.id} elevation={2} sx={{ mb: 1.5, borderRadius: '8px', '&:before': { display: 'none' } }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />} // Usamos la prop 'color'
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography sx={{ fontWeight: 700, color: 'primary.main' }}> {/* Usando el tema */}
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Caja de Contacto y Redes Sociales */}
        <Box 
          sx={{ 
            mt: 8, p: 4, textAlign: 'center', 
            backgroundColor: 'primary.main', // Usando el tema
            color: 'common.white', // Usando el tema
            borderRadius: '10px' 
          }}
        >
          <Typography variant="h4" component="h3" gutterBottom>
            ¿Aún tienes preguntas?
          </Typography>
          <Typography sx={{ mb: 3, opacity: 0.9 }}>
            Nuestro equipo está listo para ayudarte. Conéctate con nosotros a través de nuestros canales oficiales.
          </Typography>
          <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
            <Link href={LINKEDIN_URL} target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LinkedInIcon /> LinkedIn
            </Link>
            <Link href={INSTAGRAM_URL} target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <InstagramIcon /> Instagram
            </Link>
            <Link href={FACEBOOK_URL} target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FacebookIcon /> Facebook
            </Link>
            <Link href={WHATSAPP_URL} target="_blank" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WhatsAppIcon /> WhatsApp
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqPage;