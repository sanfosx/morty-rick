import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './Personaje.css'

function Personaje(props) {
  const [addFav, setAddFav] = useState(false)


  return (
    <seccion className="card-character">

      {/*eslint-disable-next-line react/prop-types*/}
      <img src={props.data.image} alt="" className="img-character"/>

      <div className="character-detail">
        
      
      <div className="card-title">
        {/*eslint-disable-next-line react/prop-types*/}
      <h2>{props.data.name}</h2>
      <p onClick={() => setAddFav(!addFav)} className="iconfav">
          {addFav ? (<AiFillHeart />) : (<AiOutlineHeart />)}
        </p>
      </div>
      <li>{props.data.status} - {props.data.species}</li>
      <p>Origin:</p>
      <p className="character-p">{props.data.origin.name}</p>
      <p> Last know location:</p>
      <p className="character-p">{props.data.location.name}</p>

       
        {/*eslint-disable-next-line react/prop-types*/}
        <Link to={`/personajes/${props.data.id}`}><p>Mas detalles</p> </Link>
      </div>
    </seccion>
  )
}

export default Personaje
