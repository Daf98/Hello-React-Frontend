/* eslint-disable no-await-in-loop */
// import { fetchData } from './configureStore';
// fetch data from API and move it to store

const baseURL = 'http://localhost:3000/message';
const fetchDataFromAPI = async () => {
  const data = await fetch(baseURL);
  const response = await data.json();
  return response;
};
export default fetchDataFromAPI;
