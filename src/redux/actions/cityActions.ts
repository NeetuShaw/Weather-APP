export const ADD_CITY = 'ADD_CITY';
export const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';  // Action for adding to favorites
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const REMOVE_CITY = 'REMOVE_CITY'; // Action type for removing city

export const addCity = (city: string) => ({
  type: ADD_CITY,
  payload: city,
});


export const setActiveCity = (city: string | null) => ({
  type: SET_ACTIVE_CITY,
  payload: city,
});


export const addToFavorites = (city: string) => ({
  type: ADD_TO_FAVORITES,
  payload: city,
});


export const removeFromFavorites = (city: string) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: city,
});

export const removeCity = (city: string) => ({
  type: REMOVE_CITY,
  payload: city,
});



