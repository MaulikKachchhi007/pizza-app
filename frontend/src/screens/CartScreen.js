import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartAction';
import { removeFromItem } from '../actions/CartAction';
import Error from '../components/messages/Error';
import Success from '../components/messages/Success';
import StripeCheckout from '../components/Payments/StripeCheckout';

export default function CartScreen() {
    const cartState = useSelector((state) => state.cartReducers)
    const cartItems = cartState.cartItems;
    let subTotals = cartItems.reduce((x, item) => parseFloat(x) + parseFloat(item.price), 0);
    let discount = (subTotals * 1 / 100);
    let tax = (subTotals * 10 / 100);
    let total = subTotals - discount + tax;
    const dispatch = useDispatch();
    const { success, error, loading} = useSelector((state) => state.placeOrderReducers);

    return (
        <div>
            <div className="row justify-content-center mt-5">
            {loading && <loading />}
                    {success && <Success success='Payment done successfully.' />}
                    {error && <Error error='{error}' />}
                <div className="col-md-6">
                    <h1>Pizza Cart</h1>
                    {
                        cartItems.map(items => {
                            return (
                                <div className="flex-container">
                                    <div className='text-left m-1 w-100'>
                                        <h1 className='mt-3' style={{ fontSize: '60px!important' }}>{items.name} [{items.varient}]</h1>
                                        <h1>Price: {items.quantity} * {items.prices[0][items.varient]} = {items.price}</h1>
                                        <h1 className="d-inline">Quantity: </h1>
                                        <i className='fa fa-plus text-success' onClick={() => dispatch(addToCart(items, items.quantity + 1, items.varient))} aria-hidden='true'></i>
                                        <b> {items.quantity} </b>
                                        <i className='fa fa-minus text-danger' onClick={() => dispatch(addToCart(items, items.quantity - 1, items.varient))} aria-hidden='true'></i>
                                        <hr />
                                    </div>
                                    <div className='m-5 w-100'>
                                        <img src={items.image} alt="pizza" style={{ height: '80px', width: '80px' }} />
                                    </div>
                                    <div className='m-5 w-100'>
                                        <i className='fa fa-trash text-danger mt-2' aria-hidden='true' onClick={() => dispatch(removeFromItem(items))}></i>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Price Details
                        </div>
                        <div className="card-body">
                            <table className='table  table-responsive'>
                                <tbody>
                                    <tr>
                                        <th>Prices</th>
                                        <td> {subTotals} </td>
                                    </tr>
                                    <tr>
                                        <th>Discount (1%)</th>
                                        <td> {discount} </td>
                                    </tr>
                                    <tr>
                                        <th>Tax (10%)</th>
                                        <td> {tax} </td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td> {total} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <div className='d-flex justify-content-end'>
                                <StripeCheckout amount={total} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
