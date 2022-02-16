import React from 'react';
import { Amounth, BuyButton, BuyList, BuyListItem, BuyListItemRegister, Container, Information, Title } from './ShoppingCartStyles';

const ShoppingCart = () => {
  return (
    <Container>
      <Title>Tú Compra</Title>
      <Amounth>$ 0</Amounth>
      <BuyButton>Comprar</BuyButton>
      <Information></Information>
      <BuyList>
        <BuyListItem>
          {/*Acá hay que hacer un .map */}
          <BuyListItemRegister>
            
          </BuyListItemRegister>
        </BuyListItem>
      </BuyList>
    </Container>
  );
};

export default ShoppingCart;
