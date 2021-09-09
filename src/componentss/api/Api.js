import axios from 'axios';
import React from 'react';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '519e66b573742455720bff3c650fbe1d';

export const Apidata = async (city, country) => {
  return await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
};
