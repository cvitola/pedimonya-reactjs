import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ContainerFirst, H1, Container, H2, Button, KeyPad, P } from '../../components/BasicStyles/BasicStyles';
import  CardCart from '../../components/CardCart/CardCart';
import { DeleteCartAction } from '../../redux/pokemones';

const ShoppingCart = () => {

  //const myCart = useSelector(store => store.pokes.shoppingPokes)
  const dispatch = useDispatch();
  const { shoppingPokes } = useSelector( store => store.pokes )
  const [infoBuy, setInfoBuy] = useState("");
  const amountTotal = () => {

    return shoppingPokes?.reduce((acum, current) => acum + current.price, 0);
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

  const handleBuyCart = () => {
    //a modo de emular la compra del carrito
    if(shoppingPokes.length !== 0){
      const newArray = [];
      dispatch(DeleteCartAction(newArray))
      let random = Math.round(Math.random() * 1000);
      setInfoBuy(`Adquiriste el carro ${random}`);
    }else{
      setInfoBuy("");
    }
    
  }

  useEffect( () => { paintCards(shoppingPokes)},[shoppingPokes])

  return (
      <ContainerFirst>
        <H1>MI PEDIDO</H1>
        <H2>TOTAL: ${amountTotal()}</H2>
        <P>{infoBuy}</P>
        <KeyPad>
          <Button onClick={handleBuyCart}>COMPRAR</Button>
          <Button onClick={handleEmptyCart} warning={true}>VACIAR</Button>   
        </KeyPad>



        <Container>
        {  shoppingPokes?.length === 0 ? 
              <h3>Tú carrito está vacío... </h3> :
            paintCards(shoppingPokes) }
        </Container>
        
      </ContainerFirst>
  );
};

export default ShoppingCart;
