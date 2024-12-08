import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string) => {
  const API_KEY = '6e62a840087f6836aabbc68713ade9d1'; 
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', 
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    throw new Error(`Failed to fetch weather data for ${city}`);
  }
};
