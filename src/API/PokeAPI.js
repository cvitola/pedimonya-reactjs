import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export const getFistPokemon = () => {
    return axios.get(`${baseURL}/1`);
}

export const getPokemons = () => {
    return axios.get(`${baseURL}`);
}

export const getInfoPokemon = (url) => {
    return axios.get(url);
}
