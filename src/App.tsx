function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-red-600 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">⚽ Torneos FC26</h1>
      </header>

      {/* Menú */}
      <nav className="flex gap-6 mt-6">
        <a href="#" className="hover:text-red-400">Inicio</a>
        <a href="#" className="hover:text-red-400">Torneos</a>
        <a href="#" className="hover:text-red-400">Clasificación</a>
        <a href="#" className="hover:text-red-400">Contacto</a>
      </nav>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-semibold mb-4">Bienvenido a la plataforma</h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Aquí podrás organizar, inscribirte y seguir los torneos de FC26.
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 p-4 text-center text-sm text-gray-400">
        © 2025 Torneos FC26 - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
