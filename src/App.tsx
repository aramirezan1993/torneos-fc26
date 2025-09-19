import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-black shadow-md">
        <h1 className="text-2xl font-bold text-red-500">⚽ Torneos FC26</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-red-400">Inicio</a>
          <a href="#" className="hover:text-red-400">Torneos</a>
          <a href="#" className="hover:text-red-400">Equipos</a>
          <a href="#" className="hover:text-red-400">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-5xl font-extrabold mb-4">Organiza tus Torneos</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl">
          Bienvenido a la plataforma oficial de <span className="text-red-500 font-semibold">FC26</span>.  
          Aquí podrás crear torneos, registrar equipos y seguir los resultados en tiempo real.
        </p>
        <button className="px-8 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition text-lg font-semibold">
          🚀 Crear Torneo
        </button>
      </section>

      {/* Sección de torneos destacados */}
      <section className="px-8 py-16 bg-gray-800">
        <h3 className="text-3xl font-bold mb-8 text-center">Torneos Activos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Liga Amateur</h4>
            <p className="text-gray-300">8 equipos compitiendo por el campeonato.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Copa Relámpago</h4>
            <p className="text-gray-300">Torneo rápido de eliminación directa.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Champions FC26</h4>
            <p className="text-gray-300">El torneo más esperado de la temporada.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-gray-400">
        © {new Date().getFullYear()} Torneos FC26 · Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
