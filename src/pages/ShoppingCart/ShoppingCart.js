import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ContainerFirst, H1, Container, H2, Button } from '../../components/BasicStyles/BasicStyles';
import  CardCart from '../../components/CardCart/CardCart';
import { DeleteCartAction } from '../../redux/pokemones';

const ShoppingCart = () => {

  //const myCart = useSelector(store => store.pokes.shoppingPokes)
  const dispatch = useDispatch();
  const { shoppingPokes } = useSelector( store => store.pokes )
  const amountTotal = () => {

    return shoppingPokes.reduce((acum, current) => acum + current.price, 0);
  }

  const paintCards = (shoppingPokes) => {
    return shoppingPokes?.map( (s,i) => <li key={i}> 
    <CardCart item={s} />
  </li>)
  }

  const handleEmptyCart = () => {
    const newArray = [];
    dispatch(DeleteCartAction(newArray))
    
  }

  useEffect( () => { paintCards(shoppingPokes)},[shoppingPokes])

  return (
      <ContainerFirst>
        <H1>MI PEDIDO</H1>
        <H2>TOTAL: ${amountTotal()}</H2>
        <Button>COMPRAR</Button>
        <Button onClick={handleEmptyCart}>VACIAR</Button>
        <Container>
        {  paintCards(shoppingPokes) }
        </Container>
        
      </ContainerFirst>
  );
};

export default ShoppingCart;
