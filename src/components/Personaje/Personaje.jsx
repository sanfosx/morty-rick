import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsCircle } from "react-icons/bs";
import './Personaje.css'

function Personaje(props) {
  const [addFav, setAddFav] = useState(false)


  return (
    <div className="card-character">

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
      <p className="character-alive"> {<BsCircle  />}{props.data.status} - {props.data.species}</p>
      <p>Origin:</p>
      <p className="character-p">{props.data.origin.name}</p>
      <p> Last know location:</p>
      <p className="character-p">{props.data.location.name}</p>

       
       {/* <Link to={`/personajes/${props.data.id}`}><p>Mas detalles</p> </Link>*/}
      </div>
    </div>
  )
}

export default Personaje
