import axios from 'axios';

const TOKEN = '501511bc92b4a2c601926e24d45ea07e'; 
const BASE_URL = `https://superheroapi.com/api/${TOKEN}`;

export const fetchInitialHeroes = async (query = 'man') => {
  try {
    const response = await axios.get(`${BASE_URL}/search/${query}`);
    if (response.data.response === 'error') {
      throw new Error(response.data.error);
    }
    return response.data.results;
  } catch (error) {
    throw error;
  }
};