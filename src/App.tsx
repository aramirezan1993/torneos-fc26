import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="absolute w-full flex items-center justify-between px-6 py-4 z-20">
        <h2 className="text-2xl font-bold text-red-500">Torneos FC26</h2>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-red-400">Inicio</a>
          <a href="#" className="hover:text-red-400">Torneos</a>
          <a href="#" className="hover:text-red-400">Contacto</a>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 flex flex-col items-center space-y-4 py-6 md:hidden">
            <a href="#" className="hover:text-red-400">Inicio</a>
            <a href="#" className="hover:text-red-400">Torneos</a>
            <a href="#" className="hover:text-red-400">Contacto</a>
          </div>
        )}
      </nav>

      {/* Banner principal */}
      <div
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-6 drop-shadow-lg">
            Torneos FC26
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Bienvenido a la plataforma oficial de torneos
          </p>

          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition">
            Inscribirme Ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
