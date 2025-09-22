import { useState, useEffect } from "react";

function App() {
  const [tabla, setTabla] = useState([
    { equipo: "FC Bogotá", puntos: 12 },
    { equipo: "América FC", puntos: 10 },
    { equipo: "Cali Stars", puntos: 8 },
    { equipo: "Medellín United", puntos: 6 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTabla((prev) =>
        prev.map((e) => ({
          ...e,
          puntos: e.puntos + Math.floor(Math.random() * 2),
        }))
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-white bg-gray-950">
      {/* HEADER */}
      <header className="backdrop-blur-md bg-gray-950/70 fixed top-0 left-0 w-full z-50 shadow-md border-b border-red-600/40">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-extrabold tracking-wide text-red-500">
            Torneos FC26
          </h1>
          <nav className="space-x-6 font-medium">
            {["Inicio", "Torneos", "Resultados", "Inscripciones"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group"
              >
                <span className="hover:text-red-400">{link}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 bg-black/40 p-8 rounded-2xl shadow-xl animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
            ¡Vive la emoción del <span className="text-red-500">FC26</span>!
          </h2>
          <p className="text-lg mb-6 text-gray-200">
            Compite en torneos, sigue resultados y demuestra tu talento
          </p>
          <a
            href="#inscripciones"
            className="bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transform transition px-8 py-3 rounded-full text-lg font-bold shadow-lg"
          >
            Inscribirse
          </a>
        </div>
      </section>

      {/* TORNEOS */}
      <section id="torneos" className="py-20 container mx-auto px-6">
        <h3 className="text-4xl font-bold text-red-500 mb-10 text-center">
          Próximos Torneos
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { titulo: "Torneo Apertura", fecha: "15 Octubre 2025", estado: "Inscripciones abiertas" },
            { titulo: "Copa Champions FC26", fecha: "30 Octubre 2025", estado: "Inscripciones abiertas" },
            { titulo: "Liga Final", fecha: "15 Noviembre 2025", estado: "Próximamente" },
          ].map((torneo, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-red-600/40 transition"
            >
              <h4 className="text-2xl font-bold mb-2 text-red-400">{torneo.titulo}</h4>
              <p className="text-sm text-gray-300">📅 {torneo.fecha}</p>
              <p className="text-sm text-gray-400">⚡ {torneo.estado}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-red-500 mb-10 text-center">
            Tabla de Clasificación
          </h3>
          <table className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-red-600 to-red-800 text-left">
                <th className="py-3 px-4">Posición</th>
                <th className="py-3 px-4">Equipo</th>
                <th className="py-3 px-4">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {tabla
                .sort((a, b) => b.puntos - a.puntos)
                .map((fila, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-700 hover:bg-gray-700 transition ${
                      idx % 2 === 0 ? "bg-gray-800/50" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-bold text-red-400">
                      #{idx + 1}
                    </td>
                    <td className="py-3 px-4">{fila.equipo}</td>
                    <td className="py-3 px-4">{fila.puntos}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INSCRIPCIONES */}
      <section id="inscripciones" className="py-20 container mx-auto px-6">
        <h3 className="text-4xl font-bold text-red-500 mb-10 text-center">
          Formulario de Inscripción
        </h3>
        <form className="max-w-lg mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg space-y-5">
          {["Nombre completo", "Nombre del equipo", "Correo electrónico"].map((placeholder, i) => (
            <input
              key={i}
              type={placeholder.includes("Correo") ? "email" : "text"}
              placeholder={placeholder}
              className="w-full p-3 rounded bg-gray-950 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-200 placeholder-gray-400"
            />
          ))}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transform transition px-6 py-3 rounded-full font-bold shadow-lg"
          >
            Enviar inscripción
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-6 text-center border-t border-red-600/30">
        <p className="text-gray-400 text-sm">
          © 2025 Torneos FC26 | Desarrollado con ❤️ por la comunidad
        </p>
      </footer>
    </div>
  );
}

export default App;
