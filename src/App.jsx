import { useState, useEffect } from 'react'

function App(){
  const [puntajes, setPuntajes] = useState([]);

  useEffect (() => {
      async function traerDatos(){
        const respuesta = await fetch('http://localhost:5258/puntajes');
        const datos = await respuesta.json();
        setPuntajes(datos);
      }
      traerDatos();
    },[]);

    const puntajesOrdenados = [...puntajes].sort((a, b) => b.puntaje - a.puntaje);

  return(
    <div>
      <h1>Ranking de Puntajes</h1>
      <ol>
        {puntajesOrdenados.map((p) => (
          <li key ={p.id}>
            {p.jugador} - {p.puntaje}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App