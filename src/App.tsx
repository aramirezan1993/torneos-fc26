import { useState, useEffect } from "react";

function App() {
  // Estado de tabla de posiciones
  const [tabla, setTabla] = useState([
    { equipo: "FC Bogotá", puntos: 12 },
    { equipo: "América FC", puntos: 10 },
    { equipo: "Cali Stars", puntos: 8 },
    { equipo: "Medellín United", puntos: 6 },
  ]);

  // Simulación de actualización de resultados
  useEffect(() => {
    const interval = setInterval(() => {
      setTabla((prev) =>
        prev.map((e) => ({
          ...e,
          puntos: e.puntos + Math.floor(Math.random() * 2), // +0 o +1
        }))
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-white bg-gray-900">
      {/* HEADER */}
      <header className="bg-gray-950 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-red-500">Torneos FC26</h1>
          <nav className="space-x-6">
            <a href="#inicio" className="hover:text-red-400">Inicio</a>
            <a href="#torneos" className="hover:text-red-400">Torneos</a>
            <a href="#resultados" className="hover:text-red-400">Resultados</a>
            <a href="#inscripciones" className="hover:text-red-400">Inscripciones</a>
          </nav>
        </div>
      </header>

      {/* HERO / BANNER */}
      <section
        id="inicio"
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">¡Vive la emoción del FC26!</h2>
          <p className="text-lg mb-6">Compite en torneos, sigue resultados y demuestra tu talento</p>
          <a
            href="#inscripciones"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold"
          >
            Inscribirse
          </a>
        </div>
      </section>

      {/* TORNEOS */}
      <section id="torneos" className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-red-500 mb-8">Próximos Torneos</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Torneo Apertura</h4>
            <p className="text-sm">Fecha: 15 Octubre 2025</p>
            <p className="text-sm">Estado: Inscripciones abiertas</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Copa Champions FC26</h4>
            <p className="text-sm">Fecha: 30 Octubre 2025</p>
            <p className="text-sm">Estado: Inscripciones abiertas</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">Liga Final</h4>
            <p className="text-sm">Fecha: 15 Noviembre 2025</p>
            <p className="text-sm">Estado: Próximamente</p>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-red-500 mb-8">Tabla de Clasificación</h3>
          <table className="w-full bg-gray-900 rounded-xl overflow-hidden shadow">
            <thead>
              <tr className="bg-red-600 text-left">
                <th className="py-3 px-4">Equipo</th>
                <th className="py-3 px-4">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {tabla.map((fila, idx) => (
                <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-3 px-4">{fila.equipo}</td>
                  <td className="py-3 px-4">{fila.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INSCRIPCIONES */}
      <section id="inscripciones" className="py-16 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-red-500 mb-8">Formulario de Inscripción</h3>
        <form className="max-w-lg bg-gray-800 p-8 rounded-xl shadow space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Nombre del equipo"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold"
          >
            Enviar inscripción
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Torneos FC26 | Desarrollado con ❤️ por la comunidad
        </p>
      </footer>
    </div>
  );
}

export default App;
