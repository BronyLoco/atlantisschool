import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Esta línea busca el <div id="root"> que pusimos en index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)