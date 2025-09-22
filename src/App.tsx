import React from "react";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-50">
        <h1 className="text-white text-2xl font-bold">⚽ Torneos FC26</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="text-white hover:text-red-400">Inicio</a>
          <a href="#torneos" className="text-white hover:text-red-400">Torneos</a>
          <a href="#clasificacion" className="text-white hover:text-red-400">Clasificación</a>
          <a href="#contacto" className="text-white hover:text-red-400">Contacto</a>
        </nav>
      </header>

      {/* BANNER */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <h2 className="text-5xl font-bold mb-6">¡Bienvenido a Torneos FC26!</h2>
        <p className="text-lg mb-8">
          Inscríbete y vive la emoción de cada partido ⚽🔥
        </p>
        <a
          href="#inscripcion"
          className="bg-red-600 hover:bg-red-800 text-white px-8 py-4 rounded-xl text-xl font-semibold shadow-lg"
        >
          Inscribirme ahora
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-black text-white">
        © 2025 Torneos FC26 - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
