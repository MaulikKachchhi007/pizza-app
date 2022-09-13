export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {

    let cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: [pizza.prices[0][varient] * quantity]
    }

    if (cartItem.quantity > 10) {
        alert("You Cannot have more than 10 Qua qntities.")
    }else {
        if (cartItem.quantity < 1) {
            dispatch({ type: 'DELETE_TO_CART', payload: pizza })
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })
        }
    }



    const cartItems = getState().cartReducers.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const removeFromItem = (pizza) => (dispatch) => {
    dispatch({ type: 'DELETE_TO_CART', payload: pizza })

    localStorage.removeItem('cartItems')
}