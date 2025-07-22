import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- 1a. Importa el Footer
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import AdmissionsPage from './pages/AdmissionsPage';
import DondeEstamosPage from './pages/DondeEstamosPage';
import NoticiasPage from './pages/NoticiasPage';
import FaqPage from './pages/FaqPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // <-- 1b. Importa la página de Política
import { CssBaseline, Box } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      {/* Usamos un Box para asegurarnos de que el footer se quede abajo */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        {/* El main contendrá las páginas que cambian */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/noticias" element={<NoticiasPage />} />
            <Route path="/docentes" element={<TeachersPage />} />
            <Route path="/admisiones" element={<AdmissionsPage />} />
            <Route path="/donde-estamos" element={<DondeEstamosPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} /> {/* <-- 2. Añade la ruta */}
          </Routes>
        </Box>
        
        <Footer /> {/* <-- 3. Coloca el Footer aquí */}
      </Box>
    </Router>
  );
}

export default App;