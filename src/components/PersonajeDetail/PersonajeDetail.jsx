
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function PersonajeDetail() {

    const { id } = useParams()
    // eslint-disable-next-line no-unused-vars
    const [status, setStatus] = useState()
    // eslint-disable-next-line no-unused-vars
    const [URL, setURL] = useState(`https://rickandmortyapi.com/api/character/${id}`)
    const [data, setData] = useState(0)
    const [episodes, setEpisodes] = useState([])


    const fetchData = async () => {
        try {
            const response = await fetch(URL);
            const jsonData = await response.json();
            setData(jsonData);
            setStatus('ok');
            const episodeNames = await Promise.all(data.episode.map(async (episodeUrl) => {
                const episodeResponse = await fetch(episodeUrl);
                const episodeData = await episodeResponse.json();
                return episodeData.name;
            }));

            setEpisodes(episodeNames);

        } catch (error) {
            setStatus('error');
            console.error('Error al cargar los datos:', error);
        }
    };



    useEffect(() => {

        fetchData();

    }, []);

    fetchData();



    const sliderSettings = {
        dots: false, // Muestra los puntos de navegación
        infinite: true, // Permite navegar en bucle
        speed: 5, // Velocidad de transición (en milisegundos)
        slidesToShow: 10, // Número de episodios visibles a la vez
        slidesToScroll: 3, // Número de episodios a desplazar al hacer clic en los botones de navegación
        autoplay: true,
        autoplaySpeed: 2000,
    };


    return (
        <div>
            <h1>{data.name}</h1>

            <Slider {...sliderSettings}>
                {episodes.map((episode, index) => (
                    <div key={index}>
                        <p>{episode}</p>
                    </div>
                ))}
            </Slider>
            <Link to='/'>Go Home</Link>

        </div>
    )
}

export default PersonajeDetail
