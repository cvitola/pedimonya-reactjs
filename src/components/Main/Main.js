import React from 'react';
import {MainPage, Wrapper, ImageTitle, Description, ImageMain,ButtonSuccess,WrapperColor, TipoPokemon} from './MainStyles';
import ImgMain from '../../img/imgMain.png';
import ImgWater from '../../img/info-icon-1.png';
import ImgFire from '../../img/info-icon-3.png';
import ImgLight from '../../img/info-icon-2.png';
import ImgTitle from '../../img/pedimon-text.png'


const Main = () => {
  return  <MainPage>
            
              <ImageTitle src={ImgTitle} alt="Titulo" />
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam itaque nihil iure explicabo ab vitae odit sint, distinctio eius.</Description>
              <Wrapper ancho ="50%">
                <ButtonSuccess>Empecemos!</ButtonSuccess>
                <ButtonSuccess>Quiero mas Info</ButtonSuccess>
              </Wrapper>
            

            <ImageMain src={ImgMain} alt="mhm"/>
            <WrapperColor>
              <TipoPokemon>
                <ImageMain dimension="25%" src={ImgWater} alt="mhm"/>
                <Description>
                  El tipo más común del juego. Ofensivamente se presentan como Pokémon muy dúctiles, sobre todo gracias a que muchos de ellos pueden aprender ataques del tipo Hielo (como Rayo Hielo) lo cual permite utilizarlos frente a Pokémon del tipo Dragón y les da fortaleza frente al tipo Planta, su debilidad. Dado a la existencia de varias MO indispensables para avanzar en los juegos, como Surf, Cascada y Buceo, se hace prácticamente obligatorio contar con un Pokémon del tipo Agua en el equipo. 
                </Description>
              </TipoPokemon>
              <TipoPokemon>
                <ImageMain dimension="25%" src={ImgFire}/>
                <Description>
                Un tipo lanzado casi totalmente al ataque. Su ataques super efectivos frente al tipo Agua (el más común del juego) y Volador los hace interesantes para incorportarlos al equipo Pokémon, sumado con la capacidad de paralizar enemigos ya sea como estrategia de combate o bien para capturar Pokémon salvajes y Legendarios. Defensivamente se presentan fuertes frente a los ataques especiales y débiles para los físicos, siendo los ataques del tipo Tierra sus peores enemigos.
                </Description>
              </TipoPokemon>
              <TipoPokemon>
                <ImageMain dimension="25%" src={ImgLight}/>
                <Description>
                Ofensivamente, se caracterizan por ser un tipo muy orientado al ataque, sobre todo en movimientos basados en ataque especial. Se presentan muy útiles contra los Pokémon del tipo Acero y Hielo. Sin embargo, defensivamente hablando son débiles contra los movimientos del tipo Agua, Roca y Tierra. Resultan convenientes como atacantes rápidos y poderosos, pero sus debilidades los pueden dejar rápidamente fuera de combate, por lo que no son recomendables como el mejor tipo para batallas de larga duración.
                </Description>
              </TipoPokemon>                            
            </WrapperColor>
          </MainPage>;
};

export default Main;
