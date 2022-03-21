import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
//import { GetAllPokemons } from '../../redux/pokemones';
import { Container, ContainerFirst, H1, Loader } from '../../components/BasicStyles/BasicStyles'
import storeImage from '../../assets/img/storeImage.jpg';
import { ImgStore } from './StorePokesStyles';
import  Card  from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';


const StorePokes = () => {

  //const dispatch = useDispatch();
  const { arrayPokes } = useSelector( store => store.pokes )
  const [loading, setLoading] = useState(false);

  //const onGetPokemons = () => {
   // dispatch(GetAllPokemons())
  //}

  useEffect( () => {
    setLoading(true);
   // onGetPokemons();

    setTimeout(() => {
      setLoading(false)}, 2000);
  },[]);
  
  return (
      <ContainerFirst>
        <H1>ATRAPALOS YA</H1>
        <ImgStore src={storeImage} alt="Imagen Store" />
        <SearchBar />
        <Container>
          {
            loading ? 
              <Loader /> :
              arrayPokes?.map( (poke,i) => <li key={i}> 
              
                  <Card dato={poke} /> 
                </li>
            )
         }
        </Container>
      </ContainerFirst>
  )
}

export default StorePokes