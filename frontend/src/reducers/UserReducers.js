// export const getAllPizzasReducers = (state = {pizzas: []}, action) => {
export const registerUsersReducers = (state = {}, action) => {
    switch (action.type) {
        case "USER_REGISTER_REQUEST":
            return {
                loading: true,
                ...state,
            }
        case "USER_REGISTER_SUCCESS":
            return {
                loading: false,
                success: true,
            };
        case "USER_REGISTER_FAILED":
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {};

const initialState = {
    currentUser: currentUser,
};
export const loginUsersReducers = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return {
                loading: true,
                ...state,
            }
        case "USER_LOGIN_SUCCESS":
            return {
                loading: false,
                currentUser: action.payload,
                success: true,
            };
        case "USER_LOGIN_FAILED":
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}