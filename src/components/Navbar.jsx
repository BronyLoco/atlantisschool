import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // <-- 1. IMPORTA LA HERRAMIENTA
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { LOGO_URL_WHITE_TRANSPARENT } from '../constants';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation(); // <-- 2. ACTIVA LA HERRAMIENTA
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleMenuClose = () => { setAnchorEl(null); };

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'rgba(0, 51, 102, 0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        
        <NavLink to="/"><img src={LOGO_URL_WHITE_TRANSPARENT} alt="Logo" style={{ height: '55px', display: 'block' }} /></NavLink>
        
        <Box>
          {/* ===== 3. TRADUCE CADA BOTÓN ===== */}
          <Button onClick={handleMenuClick} endIcon={<ArrowDropDownIcon />} sx={{ color: 'white' }}>
            {t('navbar.about')}
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            {/* El texto de los items del menú también se debe traducir, pero lo dejaremos para después para simplificar */}
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/nuestra-mision">Nuestra Misión</MenuItem>
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/docentes">Docentes</MenuItem>
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/galeria">Galería</MenuItem>
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/tour-virtual">Tour Virtual</MenuItem>
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/vida-estudiantil">Vida Estudiantil</MenuItem>
          </Menu>
          
          <Button component={NavLink} to="/programas-academicos" sx={{ color: 'white', '&.active': { color: 'secondary.main' } }}>
            {t('navbar.programs')}
          </Button>
          <Button component={NavLink} to="/admisiones" sx={{ color: 'white', '&.active': { color: 'secondary.main' } }}>
            {t('navbar.admissions')}
          </Button>
          <Button component={NavLink} to="/noticias" sx={{ color: 'white', '&.active': { color: 'secondary.main' } }}>
            {t('navbar.news')}
          </Button>
          <Button component={NavLink} to="/calendario" sx={{ color: 'white', '&.active': { color: 'secondary.main' } }}>
            {t('navbar.calendar')}
          </Button>
          <Button component={NavLink} to="/faq" sx={{ color: 'white', '&.active': { color: 'secondary.main' } }}>
            {t('navbar.faq')}
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button 
            component={RouterLink}
            to="/portal-acceso"
            variant="outlined" 
            color="secondary"
            sx={{
              fontWeight: 'bold',
              borderColor: 'secondary.main',
              '&:hover': {
                backgroundColor: 'rgba(240, 180, 41, 0.1)',
                borderColor: 'secondary.light',
              }
            }}
          >
            {t('navbar.portal')}
          </Button>
          <LanguageSwitcher />
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;