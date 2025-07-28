import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px' }}>
      <Button 
        onClick={() => changeLanguage('es')} 
        sx={{ color: i18n.language === 'es' ? 'secondary.main' : 'white', borderRadius: '20px', minWidth: '40px' }}
      >
        ES
      </Button>
      <Button 
        onClick={() => changeLanguage('en')} 
        sx={{ color: i18n.language === 'en' ? 'secondary.main' : 'white', borderRadius: '20px', minWidth: '40px' }}
      >
        EN
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;