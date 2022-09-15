import axios from "axios";

export const  placeOrder = (token, subTotals) => async (dispatch, getState) => {
    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUsersReducers.currentUser;
    const cartItems  = getState().cartReducers.cartItems;

    try {
        const res = await axios.post('/api/v1/orders/placeorder', {token, subTotals,  currentUser, cartItems});
            dispatch({type: 'PLACE_ORDER_SUCCESS'});
    } catch (error) {
        console.log(error);
        dispatch({type: 'PLACE_ORDER_FAILED'});
    }
}


export const getAllOrders = () => async dispatch => {
    dispatch({ type: 'GET_ORDERS_REQUEST' })

    try {
        const res = await axios.get('/api/v1/orders')
        dispatch({ type: 'GET_ORDERS_SUCCESS', payload: res.data.data })
    } catch (error) {
        dispatch({ type: 'GET_ORDERS_FAILED', payload: error })
        console.log(error.message);
    }
}