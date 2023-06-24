
import { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'


function PersonajeDetail() {
    
    const { id } = useParams()
    // eslint-disable-next-line no-unused-vars
    const [status, setStatus] = useState()
     // eslint-disable-next-line no-unused-vars
    const [URL, setURL] = useState(`https://rickandmortyapi.com/api/character/${id}`)
    const [data, setData] = useState(0)
    


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
        <div>
            <h1>{data.name}</h1>
            <Link to='/'>Go Home</Link>
        </div>
    )
}

export default PersonajeDetail
