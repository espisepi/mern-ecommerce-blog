import { combineReducers } from 'redux';
import {
    productListReducer,
    productDetailsReducer,
    productSaveReducer,
    productDeleteReducer,
    productReviewSaveReducer,
  } from './reducers/productReducers';
  import { cartReducer } from './reducers/cartReducers';
  import {
    userSigninReducer,
    userRegisterReducer,
    userUpdateReducer,
  } from './reducers/userReducers';
  import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    myOrderListReducer,
    orderListReducer,
    orderDeleteReducer,
  } from './reducers/orderReducers';

const createRootReducer = () => combineReducers({
    productList: productListReducer, // state.productList me devolvera el objeto que devuelve nuestro productListReducer
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    productReviewSave: productReviewSaveReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
})
export default createRootReducer