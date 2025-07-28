import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box, ThemeProvider } from '@mui/material'; // <-- Asegúrate de importar ThemeProvider
import theme from './theme'; // <-- 1. Importa nuestro nuevo tema

// Importa todos tus componentes y páginas
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import AdmissionsPage from './pages/AdmissionsPage';
import DondeEstamosPage from './pages/DondeEstamosPage';
import NoticiasPage from './pages/NoticiasPage';
import FaqPage from './pages/FaqPage';
import MisionPage from './pages/MisionPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CalendarioPage from './pages/CalendarioPage';
import ProgramasPage from './pages/ProgramasPage'; 
import GaleriaPage from './pages/GaleriaPage'; 
import LoginPage from './pages/LoginPage'; 
import VidaEstudiantilPage from './pages/VidaEstudiantilPage'; 
import TourPage from './pages/TourPage'; 

function App() {
  const [loading, setLoading] = useState(true);

  return (
    // 2. Envuelve TODO con el ThemeProvider
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        {loading ? (
          <SplashScreen onLoaded={() => setLoading(false)} />
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                {/* Todas tus rutas van aquí */}
                <Route path="/" element={<HomePage />} />
                <Route path="/nuestra-mision" element={<MisionPage />} />
                <Route path="/noticias" element={<NoticiasPage />} />
                <Route path="/docentes" element={<TeachersPage />} />
                <Route path="/admisiones" element={<AdmissionsPage />} />
                <Route path="/donde-estamos" element={<DondeEstamosPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/programas-academicos" element={<ProgramasPage />} /> 
                <Route path="/calendario" element={<CalendarioPage />} />
                <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
                <Route path="/galeria" element={<GaleriaPage />} />
                <Route path="/portal-acceso" element={<LoginPage />} />
                <Route path="/vida-estudiantil" element={<VidaEstudiantilPage />} />
                <Route path="/tour-virtual" element={<TourPage />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;