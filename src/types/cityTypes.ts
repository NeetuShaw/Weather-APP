export interface City {
    name: string;
  }
  
  export interface CityState {
    selectedCities: string[];
    activeCity: string | null;
    favoriteCities: string[];
  }
  
  export {};
  