import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddAction, OneItemAction } from '../../redux/pokemones';
import { Button } from '../BasicStyles/BasicStyles';
import { Content } from './CardStyles';
import  Count  from './Count/Count';


/* Falta modificar Diseño */

const Card = ({dato}) => {
  
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("")
  const { shoppingPokes } = useSelector( store => store.pokes )
  const handleAdd = () =>{
    setError("");
    setQuantity(quantity+1)
  }

  const handleSubs = () =>{
    if (quantity > 1) {
      setQuantity(quantity-1);
    } else {
      setError("Como mínimo debes atrapar 1.");
    }
  }

  const handleAddCart = () => {
    //1. Me fijo si el Objeto ya existe, la clave es el nombre.
    //2. Si no existe, armo el objeto y disparo la accion.
    //3. Si existe disparo una accion para incrementar en uno la cantidad.

    const itemCart = shoppingPokes?.findIndex( (element ) => element.name === dato.name ) /*No me funciona */
    if(itemCart > 0 ){
      dispatch(OneItemAction(itemCart))
    }else{
      const itemCart = {
      name : dato.name.toUpperCase(),
      image: dato.sprites.other.dream_world.front_default,
      priceUnit : parseInt(dato.base_experience)*3/2,
      amount : quantity,
      price: parseInt(dato.base_experience)*3/2 * quantity
    }
    /*1. UI despacha la accion*/
    dispatch(AddAction(itemCart));       
    }
     
    
  }
  return (
    <Content>
      <img src={dato.sprites.other.dream_world.front_default} alt="img pokemon" />
      <h4>{dato.name.toUpperCase()}</h4>
      <h3>$ {parseInt(dato.base_experience)*3/2}</h3>
      <p>{dato.base_experience}</p>
      <p>{dato.weight} Kg.</p>
      <Count count={quantity} handleAdd={handleAdd} handleSubs={handleSubs}  />
      <Button onClick={handleAddCart}>Agregar</Button>
      <h6>{error}</h6>
    </Content>
    
  )
}

export default Card