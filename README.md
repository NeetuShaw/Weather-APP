# Weather Monitoring App

## Description

The Weather Monitoring App is a weather tracking application built using **React**, **Redux**, **TypeScript**, and **OpenWeatherMap API**. The app allows users to:
- View real-time weather details for cities.
- Add and remove cities from a list of selected cities.
- Save favorite cities and view weather information for them easily.
- Get weather alerts for extreme conditions (e.g., heat, wind, storm).
- Persist user data using Redux and `localStorage`.

This app has been built with **modular design** and **reusable components**, making it easy to extend and maintain. The project is fully responsive and works on both desktop and mobile devices.

## Features

### 1. Cities Page
- Users can **select cities** and view their detailed weather information.
- On selecting a city, detailed weather data is displayed on the right side of the page, including:
  - Temperature
  - Weather condition
  - Humidity
  - Wind speed
  - Weather alerts (if applicable)
- Cities can be **added to favorites** with a heart button.
- The list of **selected cities** persists on page reload using Redux and `localStorage`.
- The **active city** (the city whose weather details are being displayed) persists when navigating between pages or reloading the app.

### 2. Add City Modal
- The app provides an **Add New City** modal to select cities from a global list.
- Users can search for cities by name.
- **Duplicate cities are not allowed** in the selected list.
- The modal can be opened via a "+" button on both the Cities Page and the Home Page.

### 3. Home Page
- Displays a list of **favorite cities** (those marked with a heart) along with their weather details.
- Provides an **Add New City** button to open the Add City modal and add cities to the Cities Page.
- Favorite cities **persist on reload** using Redux and `localStorage`.

### 4. Weather Alerts
- The app generates alerts based on weather conditions:
  - **Heat alert** if the temperature exceeds 20°C.
  - **Wind alert** if wind speed exceeds 10 km/h.
  - **Storm alert** if a storm is detected in the weather condition.

### 5. User Interaction
- **Search bar** for city name filtering.
- **Add to favorites** (heart icon) to mark cities as favorites.
- **Remove from favorites** (heart icon click) to remove cities from the favorites list.
- **Delete city** from selected cities with a “Remove” button.

## Technologies Used

- **React** - For building the user interface and managing state.
- **Redux** - For state management (selected cities, active city, favorites).
- **TypeScript** - For type safety and better developer experience.
- **Axios** - For making API calls to fetch weather data from OpenWeatherMap API.
- **OpenWeatherMap API** - For retrieving real-time weather data for cities.
- **CSS** - For styling the app using a responsive and user-friendly design.

## Setup

### Prerequisites
Before running the project, ensure you have the following installed on your machine:
- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Installation

1. **Clone the repository**:
   
   git clone https://github.com/NeetuShaw/Weather-App.git  

2. **Navigate to the project folder**:

   cd weather-monitoring-app

3. **Install the dependencies**:

    npm install

4. **Run the app**:

    npm start

5. **Open your browser and go to http://localhost:3000**.

## Running Tests
   To run the unit tests for the app, use the following command:

   npm test
   
   The tests will run and provide feedback on whether everything is working as expected.

## Features Implemented
- Weather data fetching: Fetching weather details based on user-selected cities.
- City management: Adding and removing cities from the selected list.
- Favorite cities: Users can mark cities as favorites and quickly access their weather data.
- Persist data: Using Redux and localStorage to persist the state of cities and active city.
- Responsive UI: Ensuring the app works across various screen sizes, especially on mobile devices.

## How it Works
1. **Cities Page**:

- The Cities Page displays a list of selected cities.
- Each city shows basic weather information and a button to remove it from the list.
- Clicking on a city shows its detailed weather information, including temperature, weather 
   condition, humidity, and wind speed.
- Users can also add cities to their favorites, and the list persists on refresh.

2. **Add City Modal**:

- Users can add cities by searching for them in the "Add New City" modal.
- The modal filters the cities based on the search term and ensures that no duplicate cities are 
  added.
  
3. **Home Page**:

- Displays the list of favorite cities and their weather details.
- Favorite cities can be marked with a heart icon, and the weather data is fetched automatically 
  for these cities.

## Contributing
- Fork the repository.
- Create a new branch for your feature.
- Commit your changes.
- Push to your branch.
- Open a Pull Request.


## License
This project is licensed under the MIT License - see the **LICENSE** file for details.
