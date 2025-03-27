// Importa React para poder utilizar JSX y ReactDOM para renderizar la aplicación
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importa el componente principal App
import App from './App';
// Importa los estilos generales de la aplicación
import './App.css';

// Crea la raíz de la aplicación y renderiza el componente App dentro del elemento con id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
