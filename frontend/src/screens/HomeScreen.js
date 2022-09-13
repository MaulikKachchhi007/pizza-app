import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/PizzaAction';
import Error from '../components/messages/Error';
import Loader from '../components/messages/Loader';
import Pizza from '../components/Pizza';

function HomeScreen() {
  const dispatch = useDispatch();
  const pizzasState = useSelector((state) => state.getAllPizzasReducers);

  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (<Loader />)
          : error
            ? (<Error error='Something went Wrong Try again later.' />)
            : (
              pizzas?.map((pizza) => {
                return (
                  <div className="col-md-4" key={pizza._id}>
                    <div>
                      <Pizza pizza={pizza} />
                    </div>
                  </div>)
              }
              )
            )
        }
      </div>
    </div>
  )
}

export default HomeScreen;