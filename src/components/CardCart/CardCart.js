import React from 'react'
import { Container, Details, H2, Content } from './CardCartStyles';
import {Button} from '../BasicStyles/BasicStyles'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteItemAction } from '../../redux/pokemones';

const CardCart = ( {item} ) => {

    const dispatch = useDispatch();
    const { shoppingPokes } = useSelector( store => store.pokes )

    const handleDeleteItem = () => {
        debugger
        const newPokes = shoppingPokes.filter( elem => elem.name !== item.name)
        dispatch(DeleteItemAction(newPokes))

    }
  return (

        <Container>
            <H2>{item.name}</H2>
            <Content>
                <img src={item.image} alt="imagen del carro" />
                <Details>
                    <p>Precio Unitario: $ {item.priceUnit}</p>
                    <p>Cantidad: {item.amount}</p>
                    <p>SubTotal: {item.price}</p>
                </Details>
            </Content>
        <Button onClick={handleDeleteItem} warning={true}>Quitar</Button>
        </Container>

  )
}

export default CardCart