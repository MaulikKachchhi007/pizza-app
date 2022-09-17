import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {filterPizzas} from './../actions/PizzaAction'

export default function Filter() {
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] =  useState('');
    const [category, setCategory] =  useState('all');
    return (
        <div className='container'>
            <div className='row mt-5  justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
                    <div className='col-4'>
                        <input type="text" onChange={(e)=>setSearchKey(e.target.value)}  className='form-control' placeholder='Search Pizza'/>
                    </div>
                    <div className='col-4'>
                        <select className='form-control form-control-select' onChange={(e)=>setCategory(e.target.value)}>
                            <option value='all'>All</option>
                            <option value='veg'>Veg</option>
                            <option value='nonveg'>Non Veg</option>
                        </select>
                    </div>
                    <div className='col-4 d-grid gap-2'>
                        <button className='btn btn-danger w-100' onClick={()=>dispatch(filterPizzas(searchKey, category))}>FILTER</button>
                    </div>
            </div>
        </div>
    )
}
