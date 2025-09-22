import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold flex items-center">
            <span role="img" aria-label="soccer" className="mr-2">⚽</span>
            Torneos FC26
          </h1>
          <nav className="space-x-6">
            <a href="#inicio" className="hover:text-yellow-400">Inicio</a>
            <a href="#torneos" className="hover:text-yellow-400">Torneos</a>
            <a href="#clasificacion" className="hover:text-yellow-400">Clasificación</a>
            <a href="#contacto" className="hover:text-yellow-400">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Banner principal */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603297631952-6f3f1cd5dad2')" }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            ¡Bienvenido a los Torneos FC26!
          </h2>
          <p className="text-lg mb-6">
            Organiza, inscríbete y vive la pasión del fútbol con nosotros.
          </p>
          <a
            href="#inscripcion"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition"
          >
            Inscribirme ahora
          </a>
        </div>
      </section>

      {/* Próximos torneos */}
      <main className="flex-grow container mx-auto px-6 py-10">
        <section id="torneos" className="mb-10">
          <h2 className="text-3xl font-bold mb-6 text-center">🏆 Próximos Torneos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Copa Apertura</h3>
              <p className="text-gray-600 mb-4">Inicio: 15 Octubre 2025</p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                Inscribirse
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Liga Juvenil</h3>
              <p className="text-gray-600 mb-4">Inicio: 22 Octubre 2025</p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                Inscribirse
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Torneo Relámpago</h3>
              <p className="text-gray-600 mb-4">Inicio: 5 Noviembre 2025</p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                Inscribirse
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© 2025 Torneos FC26 - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;

