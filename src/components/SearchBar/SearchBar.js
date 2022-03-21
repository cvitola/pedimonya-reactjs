import React ,{  useState }from 'react';
import { useSelector } from 'react-redux';
import { ContainerBar, Results, ContainerSearch } from './SearchBarStyes';
import { FcSearch } from 'react-icons/fc';
import  Card  from '../../components/Card/Card';
import { Button } from '../BasicStyles/BasicStyles';

const SearchBar = () => {

    const [inputSearch, setInputSearch] = useState("");
    const { arrayPokes } = useSelector( store => store.pokes )
    const [pokesFilter, setPokesFilter] = useState([]);
    const handleSearch = (e) => {
        setInputSearch(e.target.value.toUpperCase());
        setPokesFilter(arrayPokes.filter( valor => valor.name.toUpperCase().includes(inputSearch)))
    }

    const handleEmptySearch = () => { setPokesFilter([])}


  return (
    <ContainerBar>
      <ContainerSearch>
        <FcSearch />
        <input placeholder='Buscá tus pokemones  ... ' onChange={handleSearch}/>  
        <Button onClick={handleEmptySearch} warning={true}>Borrar</Button>
      </ContainerSearch>
      <Results>
        {
         pokesFilter?.map( (poke,i) => <li key={i}>
          <Card dato={poke} /> 
        </li>)

        }        
        </Results>
    </ContainerBar>
  )
}

export default SearchBar