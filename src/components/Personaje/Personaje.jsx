import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Personaje(props) {
  const [addFav, setAddFav] = useState(false)


  return (
    <>
      <div>
        {/*eslint-disable-next-line react/prop-types*/}
        <h3>{props.data.name}</h3>
        {/*eslint-disable-next-line react/prop-types*/}
        <img src={props.data.image} alt="" />
      </div>
      <a onClick={() => setAddFav(!addFav)}>
        {addFav ? (<AiFillHeart />) : (<AiOutlineHeart />)}
      </a>
      <Link to={`/personajes/${props.data.id}`}><p>Mas detalles</p> </Link>
  
      
    </>
  )
}

export default Personaje
