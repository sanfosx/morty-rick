import {useState} from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './Episodio.css'

function Episodio(props) {
    const [addFav, setAddFav] = useState(false)
  return (
    
      <div className="card-episodios">
        <div className="card-episodios-tittle">
        {/*eslint-disable-next-line react/prop-types*/}
        <h3>{props.data.episode}</h3>
        <a onClick={() => setAddFav(!addFav)}>
        {addFav ? (<AiFillHeart />) : (<AiOutlineHeart />)}
      </a>
        </div>
        {/*eslint-disable-next-line react/prop-types*/}
        <h2>{props.data.name}</h2>
        {/*eslint-disable-next-line react/prop-types*/}
        <h5>{props.data.air_date}</h5>

       
      </div>
      
  )
}

export default Episodio
