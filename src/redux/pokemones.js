//valor default para este componente login
const defaultValue = {
    shoppingPokes: [],
};


//Actions type
const ADD_CART = 'ADD_CART';
//Reducers
export default function CartReducer(state = defaultValue, {type, payload}) {
    switch(type){
        case ADD_CART: return{...state, shoppingPokes: payload}; /*como hago para agregar al shoppingPokes , esto me pisa el valor, no lo agrega??? */
        default: return state;
    }
}
//Actions

export const AddAction =(equis) => (dispatch) =>{
    console.log(`estoy en la action ahora ${equis}`);
    dispatch({
        type: ADD_CART,
        payload: equis
    })
}
