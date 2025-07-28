import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n/i18n.js' // Importa la configuración de i18n

// Esta línea busca el <div id="root"> que pusimos en index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)