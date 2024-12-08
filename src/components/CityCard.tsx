import React from 'react';

interface CityCardProps {
  city: string;
  weatherInfo: string; // Replace with actual type if you have it
}

const CityCard: React.FC<CityCardProps> = ({ city, weatherInfo }) => {
  return (
    <div className="city-card">
      <h3>{city}</h3>
      <p>{weatherInfo}</p>
    </div>
  );
};

export default CityCard;

export {};
