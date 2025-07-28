import { Chip } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Azul Atlantis
    },
    secondary: {
      main: '#f0b429', // Oro del Descubrimiento
      light: '#ffc107', // Amarillo claro para hover
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      light: '#f4f7f6',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
    // ===== NUEVA SECCIÓN: COLORES PERSONALIZADOS PARA USOS ESPECÍFICOS =====
    custom: {
      navbar: {
        background: 'rgba(0, 51, 102, 0.85)', // Nuestro azul primario con 85% de opacidad
        border: 'rgba(255, 255, 255, 0.1)',   // Blanco con 10% de opacidad
      },
      chip: {
        background: 'rgba(0, 51, 102, 0.1)', // Fondo claro para chips
         
      },
      mapPage: {
        cardBackground: 'rgba(0, 51, 102, 0.7)',
        cardBorder: 'rgba(255, 255, 255, 0.1)',
        waveFill: 'rgba(0, 51, 102, 0.7)', // Usamos la misma opacidad que el navbar
      },
      glassmorphism: {
        main: 'rgba(255, 255, 255, 0.1)', // Un color base para tarjetas "glass"
      }
    }
  },

  typography: {
    fontFamily: 'Montserrat, sans-serif', // Fuente base para párrafos
    // Sobrescribimos los estilos de los encabezados para usar Playfair Display
    h1: { fontFamily: 'Playfair Display, serif', fontWeight: 700 },
    h2: { fontFamily: 'Playfair Display, serif', fontWeight: 700 },
    h3: { fontFamily: 'Playfair Display, serif', fontWeight: 700 },
    h4: { fontFamily: 'Playfair Display, serif', fontWeight: 700 },
    h5: { fontFamily: 'Playfair Display, serif', fontWeight: 700 },
    // h6 lo podemos dejar con Montserrat para subtítulos más pequeños
    h6: { fontFamily: 'Montserrat, sans-serif', fontWeight: 600 },
  },

  // 3. COMPONENTES (Podemos estilizar componentes por defecto)
  components: {
    // Ejemplo: Hacemos que todos los botones tengan un estilo base
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px', // Todos los botones serán redondeados
          textTransform: 'none', // Sin mayúsculas automáticas
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;