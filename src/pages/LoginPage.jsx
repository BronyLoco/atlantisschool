/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // ===== CAMBIO 1: IMPORTAR HOOK =====

const loginImageUrl = 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const LoginPage = () => {
  const { t } = useTranslation(); // ===== CAMBIO 2: INICIALIZAR HOOK =====
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // ===== CAMBIO 3: INTERNACIONALIZAR EL MENSAJE DE ALERTA =====
    alert(`${t('loginPage.alert.title')}\n${t('loginPage.alert.userLabel')} ${email}\n${t('loginPage.alert.passwordLabel')} ${password}`);
  };

  return (
    <Grid container component="main" sx={{ height: 'calc(100vh - 68.5px)', backgroundImage: `url(${loginImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={12} square sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        <Container maxWidth="xs">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography component="h1" variant="h4" sx={{ color: 'primary.main' }}>
                {t('loginPage.pageTitle')}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
                {t('loginPage.pageSubtitle')}
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                {/* ===== CAMBIO 4: INTERNACIONALIZAR EL FORMULARIO ===== */}
                <TextField margin="normal" required fullWidth id="email" label={t('loginPage.form.emailLabel')} name="email" autoComplete="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField margin="normal" required fullWidth name="password" label={t('loginPage.form.passwordLabel')} type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label={t('loginPage.form.rememberMe')} />
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2, py: 1.5, fontWeight: 'bold' }}>
                  {t('loginPage.form.submitButton')}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      {t('loginPage.form.forgotPassword')}
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