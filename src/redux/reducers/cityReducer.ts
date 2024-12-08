import { 
  ADD_CITY, 
  SET_ACTIVE_CITY, 
  REMOVE_CITY, 
  ADD_TO_FAVORITES, 
  REMOVE_FROM_FAVORITES 
} from '../actions/cityActions';

// Load state from local storage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('weatherAppState');
    if (serializedState === null) {
      return undefined; // Return undefined to use the default initial state
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from local storage:', error);
    return undefined;
  }
};

// Save state to local storage
const saveStateToLocalStorage = (state: CityState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('weatherAppState', serializedState);
  } catch (error) {
    console.error('Error saving state to local storage:', error);
  }
};

interface CityState {
  selectedCities: string[];
  activeCity: string | null; // Allow null for activeCity
  favoriteCities: string[];
  tempUnit: 'metric' | 'imperial';
}

// Load persisted state or use the default initial state
const initialState: CityState = loadStateFromLocalStorage() || {
  selectedCities: ['New York', 'London'],
  activeCity: null,
  favoriteCities: [],
  tempUnit: 'metric',
};

const cityReducer = (state = initialState, action: any) => {
  let newState;

  switch (action.type) {
    case ADD_CITY:
      newState = {
        ...state,
        selectedCities: [...state.selectedCities, action.payload],
      };
      break;

    case SET_ACTIVE_CITY:
      newState = {
        ...state,
        activeCity: action.payload,
      };
      break;

    case REMOVE_CITY:
      newState = {
        ...state,
        selectedCities: state.selectedCities.filter((city) => city !== action.payload),
      };
      break;

    case ADD_TO_FAVORITES:
      newState = {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload],
      };
      break;

    case REMOVE_FROM_FAVORITES:
      newState = {
        ...state,
        favoriteCities: state.favoriteCities.filter((city) => city !== action.payload),
      };
      break;

    default:
      newState = state;
  }

  // Save the updated state to local storage
  saveStateToLocalStorage(newState);
  
  return newState;
};

export default cityReducer;
