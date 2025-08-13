import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contador from './pages/Contador.jsx'
import Usuarios from './pages/Usuarios.jsx'

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/contador">Contador</Link> |{" "}
        <Link to="/usuarios">Usuários</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </div>
  )
}
