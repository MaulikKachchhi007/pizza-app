import axios from "axios";

export const registerUser = (users) => async dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST' })

    try {
        const response = await axios.post('/api/v1/users/register', users)
        console.log(response)

        dispatch({ type: 'USER_REGISTER_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error })
    }

}

export const loginUser = (users) => async dispatch => {

    dispatch({ type: 'USER_LOGIN_REQUEST' })

    try {
        const response = await axios.post('/api/v1/users/login', users)
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data.data })
        localStorage.setItem('currentUser' , JSON.stringify(response.data.data))
        window.location.href='/'
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
    }

}


export const logOutUser = () => async dispatch => {
    localStorage.removeItem('currentUser')
    window.location.href='/login'
}
