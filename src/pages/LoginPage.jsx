/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { motion } from 'framer-motion';

const loginImageUrl = 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Simulación de Login:\nUsuario: ${email}\nContraseña: ${password}`);
  };

  return (
    // ===== CAMBIO 1: La imagen de fondo ahora está en el Grid PADRE =====
    <Grid 
      container 
      component="main" 
      sx={{ 
        height: 'calc(100vh - 68.5px)',
        backgroundImage: `url(${loginImageUrl})`, // Fondo aplicado aquí
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ===== CAMBIO 2: Eliminamos por completo la columna de la imagen que antes estaba aquí ===== */}
      
      {/* Columna Derecha: El Formulario */}
      {/* ===== CAMBIO 3: Ajustamos la columna del formulario para que se centre y tenga un fondo blanco ===== */}
      <Grid 
        item 
        xs={12} 
        sm={8} 
        md={5} 
        component={Paper} 
        elevation={12} 
        square
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          // Hacemos que la columna ocupe todo el lado derecho en pantallas grandes
          marginLeft: 'auto' 
        }}
      >
        <Container maxWidth="xs">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography component="h1" variant="h4" sx={{ color: 'primary.main' }}>
                Portal de Acceso
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
                Bienvenido a tu comunidad Atlantis.
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="email" label="Correo Electrónico" name="email" autoComplete="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordarme" />
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2, py: 1.5, fontWeight: 'bold' }}>
                  Iniciar Sesión
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default LoginPage;