import React from 'react'
import StripeCheckoutButton from 'react-stripe-checkout';

export default function StripeCheckout({amount}) {
    return (
        <div>
            <StripeCheckoutButton amount={amount}>
             
                <button className='btn btn-danger btn-sm ms-auto'>CHECK OUT</button> 
            </StripeCheckoutButton> 
        </div>
    )
}
