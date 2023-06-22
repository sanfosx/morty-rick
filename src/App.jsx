import { useState, useEffect } from 'react'
import './App.css'
import Personaje from './components/Personaje/Personaje'



function App() {
  const [URL , setURL]=useState('https://rickandmortyapi.com/api/character')
  const [data, setData] = useState(0)
  const [status, setStatus] = useState()

  useEffect(() => {
    fetchData();
  }, [URL]);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(data)
      setStatus('ok');
    } catch (error) {
      setStatus('error');
      console.error('Error al cargar los datos:', error);
    }
  };

  return (
    <>
      {status === 'cargando' && <p>Cargando...</p>}
      {status === 'ok' && (
        <div>
          <h2>Personajes de Rick and Morty:</h2>
          {data.results.map((r) => (
            <Personaje key={r.id} data={r}></Personaje>
          ))}
        </div>
      )}
      {/*data.results.map((character) => (character.name))*/}
      {status === 'error' && <p>Error al cargar los datos.</p>}

      <p className="read-the-docs">
        Sanfosx
       
      </p>
    </>
  )
}

export default App
