import { combineReducers } from 'redux'
import {
    productListReducer
} from './reducers/productReducers'

const createRootReducer = () => combineReducers({
    productList: productListReducer // state.productList me devolvera el objeto que devuelve nuestro productListReducer
})
export default createRootReducer