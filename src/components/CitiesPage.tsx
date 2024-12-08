  import React, { useState } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import { Link } from 'react-router-dom';  
  import { RootState } from '../redux/store/store';
  import { setActiveCity, removeCity, addToFavorites, addCity } from '../redux/actions/cityActions';
  import WeatherDetails from './WeatherDetails';
  import CityModel from './CityModel';
  import '../styles/CitiesPage.css';
  
  const CitiesPage: React.FC = () => {
    const dispatch = useDispatch();
    const { selectedCities, activeCity, favoriteCities } = useSelector(
      (state: RootState) => state.cities
    );
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);
  
  const handleSetActiveCity = (city: string) => {
    dispatch(setActiveCity(city));
  };

  const handleAddCity = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveCity = (city: string) => {
    if (city === activeCity) {
      dispatch(setActiveCity(null)); // Clear activeCity if it's the city being removed
    }
    dispatch(removeCity(city)); // Remove the city from the list
  };

  const handleAddToFavorites = (city: string) => {
    if (!favoriteCities.includes(city)) {
      dispatch(addToFavorites(city)); 
    }
  };

 

  return (
    <div className="cities-page">
      <div className="left-sidebar">
        <h3>Navigation</h3>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
        </ul>
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <div className="header">
          <h2>Select City</h2>
          <button className="add-button" onClick={handleAddCity}>
            +
          </button>
        </div>

        {/* City List */}
        <ul className="city-list">
          {selectedCities.map((city) => (
            <li
              key={city}
              className={`city-item ${city === activeCity ? 'active' : ''}`}
              onClick={() => handleSetActiveCity(city)}
            >
              {city}
              <button
                className="remove-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveCity(city);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {activeCity ? (
          <>
            <div className="city-header">
              <h3>{activeCity}</h3>
              <button
                className={`favorite-button ${favoriteCities.includes(activeCity) ? 'active' : ''}`}
                onClick={() => handleAddToFavorites(activeCity)}
              >
                ♥
              </button>
            </div>
            <WeatherDetails city={activeCity} />
          </>
        ) : (
          <p className="placeholder">Select a city to view details</p>
        )}
      </div>

      {isModalOpen && <CityModel onClose={handleCloseModal} />}
    </div>
  );
};

export default CitiesPage;