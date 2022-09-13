 import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/CartAction';

export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    function addToCartButton() 
    {
        dispatch(addToCart(pizza, quantity, varient));

    }
    return (
        <div className='m-5 shadow-lg p-3 mb-5 bg-white rounded h-auto'>
            <div onClick={handleShow}>
                <h6>{pizza.name}</h6>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>
            <div className='m-1 w-100'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='m-1 w-100'>
                            <p>Varient: </p>
                            <select className='form-control' value={varient} onChange={(e) => setVarient(e.target.value)}>
                                {pizza.varients.map(varient => {
                                    return <option value={varient} key={varient}>{varient}</option>;
                                })}

                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='m-1 w-100'>
                            <p>Quantity: </p>
                            <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                {[...Array(10).keys()].map((key, value) => {
                                    return <option value={value + 1} key={key}>{value + 1}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <p>Price: {pizza.prices[0][varient] * quantity}</p>

                </div>
                <div className='m-1 w-100'>
                    <button className='btn btn-danger' onClick={addToCartButton}>Add To Cart</button>
                </div>
            </div>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pizza.image}  alt="Pizza Image" className="img-fluid img-responsive img-centered" style={{ height: '400px !important' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}