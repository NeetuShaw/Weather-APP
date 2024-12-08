import { RootState } from '../store/store';

// Selector for selected cities
export const selectCities = (state: RootState) => state.cities.selectedCities;

// Selector for the currently active city
export const selectActiveCity = (state: RootState) => state.cities.activeCity;

export {};
