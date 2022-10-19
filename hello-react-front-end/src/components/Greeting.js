import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/configureStore';

function Greeting() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (<h1>{greetings}</h1>);
}

export default Greeting;
