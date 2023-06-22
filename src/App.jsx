import { useState, useEffect } from 'react'
import './App.css'
import Personaje from './components/Personaje/Personaje'



function App() {
  // eslint-disable-next-line no-unused-vars
  const [URL , setURL]=useState('https://rickandmortyapi.com/api/character')
  const [data, setData] = useState(0)
  const [status, setStatus] = useState()

  

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

  useEffect(() => {
    fetchData();
    console.log(data)
  }, []);

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
    
      {status === 'error' && <p>Error al cargar los datos.</p>}

    </>
  )
}

export default App
