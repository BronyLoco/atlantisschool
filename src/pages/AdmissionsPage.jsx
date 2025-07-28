/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Alert, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

// Importamos los iconos
import DescriptionIcon from '@mui/icons-material/Description';
import ForumIcon from '@mui/icons-material/Forum';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const backgroundVideoUrl = 'https://videos.pexels.com/video-files/3254009/3254009-hd_1920_1080_25fps.mp4';
const admissionSteps = [
  { id: 1, icon: <DescriptionIcon sx={{ fontSize: 40 }} />, title: '1. Envía tu Solicitud', description: 'Completa nuestro formulario en línea para iniciar esta gran aventura.' },
  { id: 2, icon: <ForumIcon sx={{ fontSize: 40 }} />, title: '2. Entrevista Familiar', description: 'Agendaremos una reunión con los padres y el aspirante para conocernos.' },
  { id: 3, icon: <FactCheckIcon sx={{ fontSize: 40 }} />, title: '3. Evaluación de Potencial', description: 'Realizamos una evaluación diagnóstica para identificar las habilidades del estudiante.' },
  { id: 4, icon: <CelebrationIcon sx={{ fontSize: 40 }} />, title: '4. Bienvenida a Atlantis', description: 'El comité comunicará los resultados. ¡Esperamos darte la bienvenida!' }
];

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({ parentName: '', studentName: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
  };

  return (
    <Box sx={{ py: 10, position: 'relative', overflow: 'hidden', color: 'common.white' }}>
      <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', left: '50%', top: '50%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: -2 }}>
        <source src={backgroundVideoUrl} type="video/mp4" />
      </video>
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 51, 102, 0.9)', zIndex: -1 }}/>
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          Tu Viaje Hacia Atlantis
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 8, opacity: 0.8 }}>
          Un proceso claro y personal en cuatro pasos clave.
        </Typography>

        {/* SECCIÓN 1: LÍNEA DE TIEMPO */}
        <Box sx={{ position: 'relative' }}>
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '4px', backgroundColor: '#f0b429', transform: 'translateX(-50%)', transformOrigin: 'top' }}
          />
          {admissionSteps.map((step, index) => (
            <Box key={step.id} sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', mb: 4, position: 'relative' }}>
              <Box sx={{ width: 'calc(50% - 22px)' }}>
                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.5 }}>
                  <Paper elevation={6} sx={{ p: 3, textAlign: index % 2 === 0 ? 'right' : 'left', backgroundColor: 'custom.mapPage.cardBackground', color: 'common.white', backdropFilter: 'blur(5px)' }}>
                    <Box sx={{ color: 'secondary.main', mb: 1 }}>{step.icon}</Box>
                    <Typography variant="h6">{step.title}</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>{step.description}</Typography>
                  </Paper>
                </motion.div>
              </Box>
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'secondary.main', border: '4px solid', borderColor: 'primary.main', zIndex: 1 }} />
            </Box>
          ))}
        </Box>

        {/* ===== SECCIÓN 2: DOCUMENTOS DESCARGABLES (CORRECTAMENTE UBICADA) ===== */}
        <Box mt={10}>
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Documentación
          </Typography>
          <Typography textAlign="center" sx={{ mb: 4, opacity: 0.8 }}>
            Si prefieres gestionar la documentación en papel, puedes descargar los siguientes formularios.
          </Typography>
          <Paper elevation={12} sx={{ p: { xs: 2, sm: 3 }, borderRadius: '16px', backgroundColor: 'custom.mapPage.cardBackground', backdropFilter: 'blur(5px)' }}>
            <List>
              <ListItem component="a" href="/documents/formulario-inscripcion.pdf" download sx={{ color: 'common.white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, borderRadius: '8px' }}>
                <ListItemIcon><DownloadForOfflineIcon color="secondary" /></ListItemIcon>
                <ListItemText primary="Formulario de Inscripción (PDF)" primaryTypographyProps={{ fontWeight: 'bold' }} />
              </ListItem>
            </List>
          </Paper>
        </Box>
        
        {/* SECCIÓN 3: FORMULARIO EN LÍNEA */}
        <Box mt={10}>
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Solicita una Entrevista
          </Typography>
          <Typography textAlign="center" sx={{ mb: 4, opacity: 0.8 }}>
            Completa el siguiente formulario para dar el primer paso. Nuestro equipo se pondrá en contacto a la brevedad.
          </Typography>
          <Paper elevation={12} sx={{ p: { xs: 3, sm: 5 }, borderRadius: '16px', backgroundColor: 'custom.mapPage.cardBackground', backdropFilter: 'blur(5px)' }}>
            {isSubmitted ? (
              <Alert severity="success" sx={{ '.MuiAlert-message': { width: '100%', textAlign: 'center' } }}>
                <Typography variant="h6">¡Solicitud Recibida!</Typography>
                <Typography>Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 48 horas.</Typography>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField fullWidth required label="Nombre del Padre/Tutor" name="parentName" value={formData.parentName} onChange={handleChange} variant="filled" InputProps={{ sx: { color: 'common.white' } }} InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }} />
                  <TextField fullWidth required label="Nombre del Estudiante" name="studentName" value={formData.studentName} onChange={handleChange} variant="filled" InputProps={{ sx: { color: 'common.white' } }} InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }} />
                  <TextField fullWidth required type="email" label="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} variant="filled" InputProps={{ sx: { color: 'common.white' } }} InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }} />
                  <TextField fullWidth required label="Teléfono de Contacto" name="phone" value={formData.phone} onChange={handleChange} variant="filled" InputProps={{ sx: { color: 'common.white' } }} InputLabelProps={{ sx: { color: 'rgba(255,255,255,0.7)' } }} />
                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Button type="submit" variant="contained" size="large" color="secondary" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      Enviar Solicitud
                    </Button>
                  </Box>
                </Box>
              </form>
            )}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default AdmissionsPage;