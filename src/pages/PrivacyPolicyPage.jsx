import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // ¡AQUÍ ESTÁ LA LÍNEA QUE FALTABA!

const PrivacyPolicyPage = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'Playfair Display, serif', color: '#003366' }}>
        Política de Privacidad
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Última actualización: {new Date().toLocaleDateString('es-ES')}
      </Typography>
      
      <Typography variant="body1" paragraph>
        En el Colegio América de Atlantis ("nosotros", "nuestro"), respetamos su privacidad y estamos comprometidos a proteger la información personal que comparte con nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos sus datos cuando visita nuestro sitio web.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, fontFamily: 'Playfair Display, serif', color: '#003366' }}>
        1. Información que Recopilamos
      </Typography>
      <Typography variant="body1" paragraph>
        Recopilamos datos que nos proporcionas directamente (al completar formularios) y datos recopilados automáticamente (a través de cookies y análisis anónimos para mejorar el sitio).
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, fontFamily: 'Playfair Display, serif', color: '#003366' }}>
        2. Cómo Usamos tu Información
      </Typography>
      <Typography variant="body1" paragraph>
        Utilizamos la información para responder a tus consultas, procesar admisiones y mejorar nuestro sitio web. Nunca vendemos tus datos.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, fontFamily: 'Playfair Display, serif', color: '#003366' }}>
        3. Seguridad de los Datos
      </Typography>
      <Typography variant="body1" paragraph>
        Tomamos medidas razonables para proteger tu información personal contra el acceso no autorizado, la alteración o la destrucción.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, fontFamily: 'Playfair Display, serif', color: '#003366' }}>
        4. Contacto
      </Typography>
      <Typography variant="body1" paragraph>
        Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de nuestra página de <Link component={RouterLink} to="/donde-estamos">Contacto</Link>.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicyPage;