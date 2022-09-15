// export const getAllPizzasReducers = (state = {pizzas: []}, action) => {
    export const placeOrderReducers = (state = {}, action) => {
        switch (action.type) {
            case "PLACE_ORDER_REQUEST":
                return {
                    loading: true,
                    ...state,
                }
            case "PLACE_ORDER_SUCCESS":
                return {
                    loading: false,
                    success: true,
                };
            case "PLACE_ORDER_FAILED":
                return {
                    loading: false,
                    error: action.payload,
                };
            default:
                return state;
        }
    }
  