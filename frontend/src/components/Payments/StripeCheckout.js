import React from 'react'
import { useDispatch } from 'react-redux';
import StripeCheckoutButton from 'react-stripe-checkout';
import { placeOrder } from '../../actions/OrderAction';

export default function StripeCheckout({amount}) {
    const key= "pk_test_51JktLsSCqayQsMftFfdDMizG311rDG8tkQ7brfEtE3dqG5D9cv1TplVKMBcjZXMz9imF1iLpAtmZDzuVBRniuGUz00h01Iyc2a";
    const dispatch = useDispatch();

    function tokenHandler(token) {
        console.log(token);
        dispatch(placeOrder(token, amount))
    }
    return (
        <div>
            <StripeCheckoutButton 
            amount={amount*100} 
            stripeKey={key} 
            shippingAddress 
            token={tokenHandler} 
            currency={'INR'}>
                <button className='btn btn-danger btn-sm ms-auto'>CHECK OUT</button> 
            </StripeCheckoutButton> 
        </div>
    )
}
 