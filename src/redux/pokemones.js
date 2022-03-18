import { getPokemons, getInfoPokemon } from '../API/PokeAPI';

//valor default para este componente login
const defaultValue = {
    shoppingPokes: [],
    arrayPokes: []
};


//Actions type
const SET_INFO = 'SET_INFO';
const ADD_CART = 'ADD_CART';
const ONE_CART = 'ONE_CART';
const DELETE_ONE_CART = 'DELETE_ONE_CART';
const DELETE_CART = 'DELETE_CART';

//Reducers
//hay que mantener lo que no se  toca, si pones uno solo te pisa todo el estado !
export default function CartReducer(state = defaultValue, {type, payload}) {

    switch(type){
        case ADD_CART: 

            return { 
                shoppingPokes: [...state.shoppingPokes, payload],
                arrayPokes: [...state.arrayPokes] 
            };
        case ONE_CART:
            return { shoppingPokes: [...state.shoppingPokes[payload].amount++]} /*WTF ?!*/
        case DELETE_ONE_CART:
            return { shoppingPokes: payload ,
                arrayPokes: [...state.arrayPokes] }
        case DELETE_CART:
            return { shoppingPokes: payload ,
                arrayPokes: [...state.arrayPokes] }
        case SET_INFO:
            return { arrayPokes : payload, 
                shoppingPokes:[]
             }
        default: return state;
    }
}

//Actions

export const GetAllPokemons = () => async(dispatch) =>{
    try{
        const info = [];
        const response = await getPokemons(); //1er llamada para obtener solo 20 pokemones.
          for(let i=0; i < response.data.results.length; i++){ //diversas llamadas para obtener toda la info de cada uno de los 20 pokemones.
            const arrayPokes = await getInfoPokemon(response.data.results[i].url);
            info.push(arrayPokes.data);
            console.log(info)
        }
        dispatch({
            type: SET_INFO,
            payload: info
        })
    }
    catch(error){
        alert(error)
    }
}
export const AddAction =(data) => (dispatch) =>{

    dispatch({
        type: ADD_CART,
        payload: data
    })
}

export const OneItemAction= (data) => (dispatch) => {
    dispatch({
        type: ONE_CART,
        payload: data
    })
}

export const DeleteItemAction = (data) => (dispatch) => {
    dispatch({
        type: DELETE_ONE_CART,
        payload: data
    })
}

export const DeleteCartAction = (data) => (dispatch) => {
    dispatch({
        type: DELETE_CART,
        payload: data
    })
}