import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from './../actions/OrderAction'
import Loader from '../components/messages/Loader';
import Error from '../components/messages/Error';

export default function OrderScreen() {
  const dispatch = useDispatch();
  const orderState = useSelector(state => state.getAllOrdersReducers);
  const { orders, error, loading } = orderState;

  useEffect(() => {
    dispatch(getAllOrders('GET_ORDERS_REQUEST'))
  }, [])


  return (
    <div>
      <h1 className='mt-5' style={{ fontSize: '25px !important' }}>My Orders</h1>
      <hr/>
      <div className='row justify-content-center'>
        {loading && <Loader />}
        {error && <Error error='Something went wrong.' />}
        {
          orders && orders.map(order => {
            return (
              <div className='col-md-8 bg-danger p-1 text-white'>
                <div className='flex-container'>
                  <div className='text-start w-100 m-1'>
                    <div style={{ fontSize: '25px !important' }}>Items</div>
                    {
                      order.orderItems.map(item => {
                        return (
                          <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                        )
                      })
                    }
                  </div>
                  <div className='text-start w-100 m-1'>
                    <h2 style={{ fontSize: '25px !important' }}>Address</h2>
                    <p>Street: {order.shippingAddress.street }</p>
                    <p>City: {order.shippingAddress.city }</p>
                    <p>Country: {order.shippingAddress.country }</p>
                    <p>Pincode: {order.shippingAddress.pincode }</p>
                  </div>
                  <div className='text-start w-100 m-1'>
                    <h2 style={{ fontSize: '25px !important' }}>Order Info</h2>
                    <p>Order Amount: {order.orderAmount}</p>
                    <p>Date: {order.createdAt.substring(0,10)}</p>
                    <p>Transction Id: {order.transctionId}</p>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}
