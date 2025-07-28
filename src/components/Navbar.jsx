import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { LOGO_URL_WHITE_TRANSPARENT } from '../constants';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleMenuClose = () => { setAnchorEl(null); };

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'rgba(0, 51, 102, 0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        
        <NavLink to="/"><img src={LOGO_URL_WHITE_TRANSPARENT} alt="Logo" style={{ height: '55px', display: 'block' }} /></NavLink>
        
        <Box>
          <Button onClick={handleMenuClick} endIcon={<ArrowDropDownIcon />} sx={{ color: 'white' }}>
            {t('navbar.about')}
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            {/* AHORA LOS ITEMS DEL MENÚ TAMBIÉN ESTÁN TRADUCIDOS */}
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/nuestra-mision">{t('navbar.mission')}</MenuItem>
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/docentes">{t('navbar.teachers')}</MenuItem>
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/galeria">{t('navbar.gallery')}</MenuItem>
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/tour-virtual">{t('navbar.tour')}</MenuItem>
            <MenuItem onClick={handleMenuClose} component={NavLink} to="/vida-estudiantil">{t('navbar.studentLife')}</MenuItem>
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
          
          {/* ===== ¡ENLACE REINCORPORADO Y TRADUCIDO! ===== */}
          <Button component={NavLink} to="/donde-estamos" sx={{ color: 'white', '&.active': { color: 'secondary.main' } }}>
            {t('navbar.contact')}
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