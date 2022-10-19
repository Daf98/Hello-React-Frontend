import { configureStore } from '@reduxjs/toolkit';
import fetchDataFromAPI from './api';

// Actions
const MESSAGES_FETCHED = 'hello-react-front-end/home/MESSAGES_FECTHED';

// Action creators
export const fetchData = () => async (dispatch) => {
  const data = await fetchDataFromAPI();
  dispatch({
    type: MESSAGES_FETCHED,
    payload: data,
  });
};

const initialState = [];
// reducer
const homeReducer = (state = initialState, action) => {
  if (action.type === MESSAGES_FETCHED) {
    return action.payload;
  }
  return state;
};

const store = configureStore({
  reducer: homeReducer,
});

export default store;
