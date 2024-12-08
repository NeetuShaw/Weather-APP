import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';  // Added import for Link
import { RootState } from '../redux/store/store';
import { removeFromFavorites } from '../redux/actions/cityActions'; 
import { setActiveCity } from '../redux/actions/cityActions';
import WeatherDetails from './WeatherDetails'; // Show weather details when city is clicked
import CityModal from './CityModel';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { favoriteCities, activeCity } = useSelector((state: RootState) => state.cities);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCityClick = (city: string) => {
    dispatch(setActiveCity(city)); // Set the clicked city as active
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleRemoveFavorite = (city: string) => {
    dispatch(removeFromFavorites(city)); 
  };

  return (
    <div className="cities-page">
    {/* Left Sidebar */}
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

 <div className="home-page">
    <div className="favorite-cities-header">
      <h1 className="favorite-cities-heading">My Favorite Cities</h1>
        <button className="add-new-city-button" onClick={handleOpenModal}>
            + Add New City
        </button>
    </div>
        <div className="favorite-cities-section">
          <div className="favorite-city-list">
            {favoriteCities.length === 0 ? (
              <p>No favorite cities yet.</p>
            ) : (
              favoriteCities.map((city) => (
                <div key={city} className="favorite-city-item" onClick={() => handleCityClick(city)}>
                  <span
                    className="favorite-icon"
                    onClick={() => handleRemoveFavorite(city)}  // Handle click to remove city
                  >
                    ♥
                  </span>
                  <h3>{city}</h3>
                  {activeCity === city && <WeatherDetails city={city} />}
                </div>
              ))
            )}
          </div>
        </div>
        {isModalOpen && <CityModal onClose={handleCloseModal} />}

      </div>
  </div>
  );
};

export default HomePage;
