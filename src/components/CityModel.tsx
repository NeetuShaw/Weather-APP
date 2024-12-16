import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { addCity } from '../redux/actions/cityActions';
import '../styles/CityModel.css';

interface CityModalProps {
  onClose: () => void;
}

const CityModal: React.FC<CityModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const { selectedCities } = useSelector((state: RootState) => state.cities);

  const [searchTerm, setSearchTerm] = useState('');
  const [cityList, setCityList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);

useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchCities = async () => {
        if (searchTerm.trim().length < 3) {
          setCityList([]);
          setNoResults(false);
          return;
        }
  
        setLoading(true);
        setError(false);
        setNoResults(false);
  
        try {
          const response = await axios.get(
            'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            {
            headers: {
              'X-RapidAPI-Key': 'daf271f92bmshf54f93d5ceb4d57p172b23jsn5d2147f0ed1a', // Load API key from .env
              'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com', // Load API host from .env
            },
            params: {
              namePrefix: searchTerm,
              limit: 10,
            },
          }
        );

        const cities = response.data.data.map((city: any) => city.city);
        if (cities.length === 0) {
          setNoResults(true);
        } else {
          setCityList(cities);
        }
      } catch (err) {
        console.error('Error fetching cities:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, 500);

  return () => clearTimeout(delayDebounce);
}, [searchTerm]);

  const filteredCities = cityList.filter(
    (city) => !selectedCities.includes(city) // Prevent duplicates
  );

  const handleAddCity = (city: string) => {
    dispatch(addCity(city)); // Add city to Redux store
    onClose(); // Close modal
  };


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add a City</h3>
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">Error fetching cities. Please try again.</p>
        ) : noResults ? (
          <p className="no-results-message">No cities found.</p>
        ) : (
          <ul className="city-list">
            {filteredCities.map((city) => (
              <li key={city} onClick={() => handleAddCity(city)} className="city-item">
                {city}
              </li>
            ))}
          </ul>
        )}
        
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default CityModal;
