import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500 mb-6">
        Torneos FC26
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Bienvenido a la plataforma oficial de torneos de FC26 ⚽
      </p>
      
      <nav className="flex gap-6">
        <a href="#" className="hover:text-red-400 transition">Inicio</a>
        <a href="#" className="hover:text-red-400 transition">Torneos</a>
        <a href="#" className="hover:text-red-400 transition">Equipos</a>
        <a href="#" className="hover:text-red-400 transition">Contacto</a>
      </nav>

      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © 2025 Torneos FC26. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
