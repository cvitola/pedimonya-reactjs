import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddAction } from '../../redux/pokemones';
import { Button } from '../BasicStyles/BasicStyles';
import { Content } from './CardStyles';
import  Count  from './Count/Count';


/* Falta modificar Diseño */

const Card = ({dato}) => {
  
  const dispatch = useDispatch();
  const pokemones = useSelector(store => store.pokes)
  const [cant, setCant] = useState(0);
  const handleAdd = () =>{
    
    setCant(cant+1)
  }

  const handleSubs = () =>{
    if (cant > 0) {
      setCant(cant-1)
    } else {
      alert("No se puede quitar mas")
    }
  }

  const handleAddCart = () => {
    /*aca habria q llamar a un reducer*/
    dispatch(AddAction(cant));        
    
  }
  return (
    <Content>
      <img src={dato.sprites.other.dream_world.front_default} alt="img pokemon" />
      <h4>{dato.name}</h4>
      <h3>$ {parseInt(dato.base_experience)*3/2}</h3>
      <p>{dato.base_experience}</p>
      <p>{dato.weight} Kg.</p>
      <Count count={cant} handleAdd={handleAdd} handleSubs={handleSubs}  />

      <Button onClick={handleAddCart}>Agregar</Button>
    </Content>
    
  )
}

export default Card