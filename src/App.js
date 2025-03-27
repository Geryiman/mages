// Importa React y el componente Gallery ubicado en src/components/Gallery.js
import React from 'react';
import Gallery from './components/Gallery';

// Función que define el componente App
function App() {
  return (
    // Contenedor principal con clase "App" para aplicar estilos globales
    <div className="App">
      {/* Título principal de la aplicación */}
      <h1>Galería de Imágenes</h1>
      {/* Se renderiza el componente Gallery que contiene la lógica y vista de la galería */}
      <Gallery />
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en index.js
export default App;
