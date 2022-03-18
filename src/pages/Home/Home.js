import {useState, useEffect} from 'react';
import { Container, ContainerFirst, CoverPage, H1, H2 } from '../../components/BasicStyles/BasicStyles';
import homePageImg from '../../assets/img/homeImage.jpg';
import { ImgHome } from './HomeStyles';
import  CardInfo  from '../../components/CardInfo/CardInfo';
import { tiposPokes } from '../../assets/Constants/Constants';
import { GetAllPokemons } from '../../redux/pokemones';
import { useDispatch } from 'react-redux';


const Home = () => {

    const [arrayTipos, setArrayTipos] = useState([]);
    const dispatch = useDispatch();
    const onGetPokemons = () => {
      dispatch(GetAllPokemons())
    }
    useEffect( () => {
        setArrayTipos(tiposPokes);
        onGetPokemons();
    }, []);

  return (
    <ContainerFirst>
        <H1>POKEMON-YA RELOADER</H1>
        <ImgHome src={homePageImg} alt="imagen principal" />

        <H2>Tipos de Pokemons</H2>
        <Container>
           {
             arrayTipos.map( t => (
                <li key={t.id}> <CardInfo dato={t} /> </li>
            ))
            }         
        </Container>

       
    </ContainerFirst>
  )
}

export default Home