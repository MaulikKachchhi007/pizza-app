import axios from "axios";

export const getAllPizzas = () => async dispatch => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })

    try {
        const res = await axios.get('/api/v1/pizzas')
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data.data })
    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })
        console.log(error.message);
    }
}