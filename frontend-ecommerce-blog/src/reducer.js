import { combineReducers } from 'redux';
import {
    productListReducer
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer } from './reducers/userReducers';


const createRootReducer = () => combineReducers({
    productList: productListReducer, // state.productList me devolvera el objeto que devuelve nuestro productListReducer
    cart: cartReducer,
    userSignin: userSigninReducer,
})
export default createRootReducer