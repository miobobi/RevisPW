import React, { useState } from 'react'

export default function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  )
}
