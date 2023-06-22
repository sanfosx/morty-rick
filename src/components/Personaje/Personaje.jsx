import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Personaje(props) {
  const [addFav, setAddFav] = useState(false)


  return (
    <>
      <div>
        <p>Nombre</p>
        <h2>{props.data.name}</h2>
        <img src={props.data.image} alt="" />


      </div>
      <a onClick={() => setAddFav(!addFav)}>
        {addFav ? (<AiFillHeart />) : (<AiOutlineHeart />)}
      </a>
    </>
  )
}

export default Personaje
