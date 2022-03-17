import { useState, useEffect } from 'react'
import { Container, ContainerFirst, H1, Loader } from '../../components/BasicStyles/BasicStyles'
import storeImage from '../../assets/img/storeImage.jpg';
import { ImgStore } from './StorePokesStyles';
import { getPokemons, getInfoPokemon } from '../../API/PokeAPI';
import  Card  from '../../components/Card/Card';


const StorePokes = () => {

  const [arrayPokes, setArrayPokes] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGetPokemons = async () =>{
      try{
          const response = await getPokemons(); //1er llamada para obtener solo 20 pokemones.
          for(let i=0; i < response.data.results.length; i++){ //diversas llamadas para obtener toda la info de cada uno de los 20 pokemones.
            const arrayPokes = await getInfoPokemon(response.data.results[i].url);
            setArrayPokes(prevArray => [...prevArray, arrayPokes.data]) //almaceno en el array.
          }
      }
      catch(error){
        alert(error);
      }

  }
  useEffect( () => {
    setLoading(true);
    onGetPokemons();
    setTimeout(() => {
      setLoading(false)}, 2000);
  },[]);
  
  return (
      <ContainerFirst>
        <H1>ATRAPALOS YA</H1>
        <ImgStore src={storeImage} alt="Imagen Store" />
        <Container>
          {
            loading ? 
              <Loader /> :
              arrayPokes.map( (poke,i) => <li key={i}> 
                  <Card dato={poke} /> 
                </li>
            )
         }
        </Container>
      </ContainerFirst>
  )
}

export default StorePokes