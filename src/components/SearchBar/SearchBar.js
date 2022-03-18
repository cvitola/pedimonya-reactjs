import React ,{ useState }from 'react'
import { Container } from './SearchBarStyes';
import { FcSearch } from 'react-icons/fc';


const SearchBar = ({dato}) => {

    const [inputSearch, setInputSearch] = useState("");
    
    const handleSearch = (e) => {
        setInputSearch(e.target.value);
        dato.filter( valor => valor.name.toUpperCase().includes(inputSearch.toUpperCase()))
        console.log(dato)
    }
  return (
    <Container>
        <FcSearch />
        <input placeholder='nombre de pokemon ... ' onChange={handleSearch}/>
    </Container>
  )
}

export default SearchBar