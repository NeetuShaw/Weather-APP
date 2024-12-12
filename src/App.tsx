import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CitiesPage from './components/CitiesPage';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<CitiesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
