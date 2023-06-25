import {useState, useEffect} from 'react'
import Episodio from '../Episodio/Episodio'
import './ListEpisodios.css'

function ListEpisodios() {
  // eslint-disable-next-line no-unused-vars
 const [urlApi, setUrlApi]=useState('https://rickandmortyapi.com/api/episode?page=1')
 const [data, setData] = useState(0)
 const [status, setStatus] = useState()
 

 

   const fetchData = async () => {
   try {
     const response = await fetch(urlApi);
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
 }, [urlApi]);

 return (
   <div>
     {status === 'cargando' && <p>Cargando...</p>}
     {status === 'ok' && (
        <>
       <div className="list-episodios">
         {data.results.map((r) => (
           <Episodio key={r.id} data={r}></Episodio>
         ))}
       </div>
       <button onClick={() => setUrlApi(data.info.prev) }>Prev</button>
       <button onClick={() => setUrlApi(data.info.next) }>Next</button>
       </>
     )}
   
     {status === 'error' && <p>Error al cargar los datos.</p>}

     
   </div>
 )
}

export default ListEpisodios
