import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import de los .js de redux a utilizar
import CartReducer from './pokemones'; 

//aca van los reducers que use la App
const rootReducer = combineReducers({
//    user: AuthReducer
    pokes: CartReducer
    //se pone , nombre del otro reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}