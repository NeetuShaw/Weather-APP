import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../utils/api';
import '../styles/WeatherDetails.css';

interface WeatherDetailsProps {
  city: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ city }) => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    const fetchCityWeather = async () => {
      setLoading(true);
      // setError(false);
      setError(null);
      setAlerts([]);
      try {
        const data = await fetchWeather(city);
        setWeather(data);

        // Generate alerts based on weather conditions
        const newAlerts: string[] = [];
        if (data.main.temp > 20) newAlerts.push('Heat Alert: Temperature exceeds 20°C!');
        if (data.wind.speed > 15) newAlerts.push('Wind Alert: Wind speed exceeds 10 km/h!');
        if (data.weather[0].main.toLowerCase().includes('storm'))
          newAlerts.push('Storm Alert: Severe storm detected!');
        setAlerts(newAlerts);
      } catch (e) {
        setError('Failed to fetch weather data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCityWeather();
  }, [city]);

  if (loading) return <p>Loading weather details...</p>;
  // if (error) return <p>Error fetching weather data.</p>;
  if (error) return <p className="error-message">{error}</p>;


  return (
    <div className="weather-details">
      <h3>{city}</h3>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} km/h</p>

      {alerts.length > 0 && (
        <div className="alerts">
          <h4>Weather Alerts:</h4>
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
