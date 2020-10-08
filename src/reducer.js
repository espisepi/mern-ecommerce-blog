import { combineReducers } from 'redux'
import {
    productListReducer
} from './reducers/productReducers'

const createRootReducer = () => combineReducers({
    productList: productListReducer
})
export default createRootReducer