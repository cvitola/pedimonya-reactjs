//valor default para este componente login
const defaultValue = {
    shoppingPokes: [],
};


//Actions type
const ADD_CART = 'ADD_CART';
const ONE_CART = 'ONE_CART';
const DELETE_ONE_CART = 'DELETE_ONE_CART';
const DELETE_CART = 'DELETE_CART';

//Reducers

export default function CartReducer(state = defaultValue, {type, payload}) {

    switch(type){
        case ADD_CART: 
            return { 
                shoppingPokes: [...state.shoppingPokes, payload]
            };
        case ONE_CART:
            return { shoppingPokes: [...state.shoppingPokes[payload].amount++]} /*WTF ?!*/
        case DELETE_ONE_CART:
            return { shoppingPokes: payload}
        case DELETE_CART:
            return { shoppingPokes: payload}
        default: return state;
    }
}

//Actions

export const AddAction =(data) => (dispatch) =>{
    console.log(`estoy en la action ahora ${data}`);
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