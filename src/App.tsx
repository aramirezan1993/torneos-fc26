import { useState } from 'react'

function App() {
  const [tournaments, setTournaments] = useState<string[]>([])
  const [name, setName] = useState('')

  const addTournament = () => {
    if (name.trim()) {
      setTournaments([...tournaments, name])
      setName('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">⚽ Torneos FC26</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del torneo"
          className="px-3 py-2 rounded text-black"
        />
        <button
          onClick={addTournament}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Agregar
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tournaments.map((t, i) => (
          <li key={i} className="p-3 bg-gray-800 rounded mb-2">{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
