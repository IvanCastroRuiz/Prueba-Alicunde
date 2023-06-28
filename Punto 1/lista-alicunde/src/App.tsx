import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Informacion Libros</h1>
      <div className="card">

        <input type="text" placeholder='Informacion'></input>

        <button >
            Agregar Libros
        </button>
      </div>
      <p className="read-the-docs">
        Prueba Ivan Castro - Alicunde
      </p>
    </>
  )
}

export default App
